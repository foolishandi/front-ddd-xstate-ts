import { Button, Form, Input, List, PageHeader, Typography } from "antd";

const Accond = ({ user, order, cart, send }: any) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    send({ type: "toDeal", value: values });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <PageHeader
        ghost={false}
        // onBack={() => window.history.back()}
        title={user.username}
        subTitle={user.email}
        extra={[
          <Button key="shop" onClick={() => send("toShop")}>
            返回
          </Button>,
        ]}
      ></PageHeader>
      <List
        header={<div>Cart</div>}
        footer={
          cart.length > 0 && (
            <Form
              name="login"
              labelCol={{
                span: 4,
              }}
              // wrapperCol={{
              //   span: 8,
              // }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="地址"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please input your address!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="联系方式"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phoneName!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 4,
                }}
              >
                <Button type="primary" htmlType="submit">
                  下单
                </Button>
              </Form.Item>
            </Form>
          )
        }
        bordered
        dataSource={cart}
        renderItem={(item) => (
          <List.Item>
            <>
              <Typography.Text mark>[Cookie]</Typography.Text> 产品:{item}
            </>
          </List.Item>
        )}
      />

      <List
        header={<div>Order</div>}
        bordered
        dataSource={order}
        renderItem={(item: any) => (
          <List.Item>
            <Typography.Text mark>[Order]</Typography.Text> order:
            {item.join(" - ")}
            <p style={{ color: "ButtonShadow" }}>
              {`地址:${user.address} 电话:${user.phoneNumber}`}
            </p>
          </List.Item>
        )}
      />
    </>
  );
};

export default Accond;
