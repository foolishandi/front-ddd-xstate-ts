import { Button, List, Typography } from "antd";

const Shop = ({ isLoading, produts, send }: any) => (
  <List
    header={<div>Cookie Menu</div>}
    // footer={<div>Footer</div>}
    bordered
    dataSource={produts}
    renderItem={(item) => (
      <List.Item>
        <>
          <Typography.Text mark>[Cookie]</Typography.Text> 产品:{item}
          {isLoading ? (
            <Button
              key={"产品" + item}
              style={{ marginLeft: 20 }}
              onClick={() =>
                send({
                  type: "addCart",
                  value: "产品" + item,
                })
              }
            >
              添加到购物车
            </Button>
          ) : null}
        </>
      </List.Item>
    )}
  />
);
export default Shop;
