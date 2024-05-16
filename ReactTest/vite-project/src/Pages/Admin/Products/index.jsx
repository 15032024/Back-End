import React, { useContext, useEffect, useState } from 'react'
import { ContextFav } from '../../../ContexApi'
import axios from 'axios'


import { Row,  Col, Card } from "antd";
import Meta from 'antd/es/card/Meta';

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {

    axios.get("https://dummyjson.com/products").then(res => {
      setProducts(res.data.products)
      console.log(res.data.products);
    })
  }, [])

  const { favs } = useContext(ContextFav);
  {console.log(favs);}



  return (
    <div id="products" style={{padding:"5rem 0"}}>
      <div className="container">
        <div className="products">
          <Row gutter={[16, 16]}>
            {products && products.map((p) => {
              return (
                <Col span={6}
                xs={24}
                md={12}
                lg={8}
                xl={6}
                key={p.id}
                style={{display:"flex", justifyContent:"center"}}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img width={100} height={200} alt="example" src={p.thumbnail} />}
                  >
                    <Meta title={p.title} description={`$${p.price}`} />
                  </Card>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Products