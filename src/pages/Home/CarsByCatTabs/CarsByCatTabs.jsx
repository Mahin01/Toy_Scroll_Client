import { Col, Row } from "react-bootstrap";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CarsByCatTabs = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return null; // or handle the error condition appropriately
  }

  return (
    <div>
      <Tabs defaultIndex={0}>
        <TabList className="mb-3 d-flex justify-content-center">
          {data.map((category, index) => (
            <Tab key={index}>{category.category}</Tab>
          ))}
        </TabList>

        {data.map((category, index) => (
          <TabPanel key={index}>
            <h2>{category.category}</h2>
            <Row>
              {category.items.map((item, itemIndex) => (
                <Col key={itemIndex} sm={4} className="mb-3">
                  <div>
                    <img src={item.picture} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                    <p>Rating: {item.rating}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default CarsByCatTabs;
