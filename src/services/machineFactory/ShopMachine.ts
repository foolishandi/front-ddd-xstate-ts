import { assign, createMachine } from "xstate";
import { produce } from "immer";
import axios from "axios";
const shopMachine = createMachine(
  {
    id: "cookieShop",
    initial: "shopPage",
    context: {
      isLoading: false,
      cart: [],
      order: [],
      user: {
        username: "",
        email: "",
        address: "",
        phoneNumber: "",
      },
      errMsg: "",
      prds: [1, 2, 3, 4, 5, 6, 7],
    },
    states: {
      shopPage: {
        initial: "loginCheck",
        states: {
          loginCheck: {
            on: {
              toCheck: [
                {
                  cond: (ctx) => ctx.isLoading,
                  target: "login",
                },
                {
                  cond: (ctx) => !ctx.isLoading,
                  target: "logout",
                },
              ],
            },
          },
          login: {
            on: {
              toAccond: {
                target: "#cookieShop.accondPage",
              },
              addCart: {
                actions: assign({
                  cart: ({ cart }, e: any) =>
                    produce(cart, (pre: any) => {
                      pre.push(e.value);
                      return pre;
                    }),
                }),
              },
              toLogout: {
                actions: assign({
                  user: () => ({
                    username: "",
                    email: "",
                  }),
                  isLoading: () => false,
                }),
                target: "#cookieShop.shopPage.logout",
              },
            } as any,
          },
          logout: {
            on: {
              toLogin: {
                target: "#cookieShop.loginPage",
              },
            },
          },
        },
      },
      loginPage: {
        on: {
          toBack: [
            {
              cond: (ctx: { isLoading: any }) => ctx.isLoading,
              target: "#cookieShop.shopPage.login",
            },
            {
              cond: (ctx: { isLoading: any }) => !ctx.isLoading,
              target: "#cookieShop.shopPage.logout",
            },
          ],
          toSubmit: {
            target: "#cookieShop.loginPage.submitting",
            actions: assign({
              user: ({ user }, e: any) => e.value,
            }),
          },
        } as any,
        states: {
          submitting: {
            invoke: {
              id: "submitService",
              src: "submitService",
              onDone: {
                target: "#cookieShop.loginPage.submitOk",
                actions: assign({
                  isLoading: () => true,
                }),
              },
              onError: {
                target: "#cookieShop.loginPage",
                actions: assign({
                  user: () => ({ username: "", email: "" }),
                  errMsg: (ctx, e: any) => e.data,
                }),
              },
            },
          } as any,
          submitOk: {
            after: {
              1000: "#cookieShop.shopPage.login",
            },
          },
        },
      },
      accondPage: {
        initial: "cart",
        on: {
          toShop: "#cookieShop.shopPage.login",
          toDeal: {
            target: "#cookieShop.accondPage.dealling",
            actions: assign({
              order: ({ order, cart }) =>
                produce(order, (pre: any) => {
                  pre.push(cart);
                  return pre;
                }),
              cart: () => [],
              user: ({ user }, e: any) =>
                produce(user, (pre: any) => {
                  return { ...pre, ...e.value };
                }),
            }),
          },
        } as any,
        states: {
          dealling: {
            invoke: {
              id: "deal",
              src: "dealService",
              onDone: {
                target: "dealOK",
              },
              onError: {
                target: "#cookieShop.accondPage",
                actions: assign({
                  errMsg: (ctx, e: any) => e.data,
                }),
              },
            } as any,
          },
          dealOK: {
            after: {
              500: {
                target: "#cookieShop.accondPage",
              },
            },
          },
          cart: {
            on: {},
          },
        },
      },
    },
  },
  {
    services: {
      submitService: ({ user }) => axios.post("/api/submit", user),
    },
  }
);

export default shopMachine;
