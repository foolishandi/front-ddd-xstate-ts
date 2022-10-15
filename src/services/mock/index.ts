import Mock from "mockjs";
Mock.setup({
  timeout: "500-1500",
});
Mock.mock("/api/submit", "post", (res) => {
  console.log(res);
  return {
    success: true,
    data: {
      username: "qq",
      email: "123@qq.com",
      adress: "成都市",
      phoneNumber: "123231231",
    },
  };
});
