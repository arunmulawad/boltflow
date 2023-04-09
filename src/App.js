import { Button, Card } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import Design from "./Design";
/* import Data from "./Data"; */

function App() {
  /* const [index, setIndex] = useState(0);
  const [background, setBackground] = useState("grey");
  const [colorIndex, setColorIndex] = useState(0); */

  const data = ["none", "Basic", "Advanced", "Complex"];
  const colors = ["grey", "green", "orange", "red"];

  return (
    <div className="App">
      <Card className="card">
        <Card.Body>
          <div className="cardBody">
            <div>
              <b className="dollars">5 </b>
              <span>
                <b>Pages</b>
              </span>
            </div>

            <div>
              <div className="dollar">$300</div>
              <div>Page Design</div>
            </div>

            <div>
              <div className="dollar">$200</div>
              <div>Interactions & Animations</div>
            </div>

            <div>
              <div className="dollar">$100</div>
              <div>CMS / Dynamic Data /Integrations</div>
            </div>

            <div>
              <div>
                <b>SubTotal</b>
              </div>
              <div className="dollars">
                <b>$ 800</b>
              </div>
            </div>
          </div>
        </Card.Body>

        <table className="borderless-table">
          <thead>
            <tr>
              <th>Pages</th>
              <th>Design</th>
              <th>Interactions & Animations</th>
              <th>Integration</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>01.</b>HOME
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <b>$200</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>02.</b>Service
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <b>$200</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>03.</b>About Us
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <b>$200</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>04.</b>Partners
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <b>$200</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>05.</b>Contact Us
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <Design data={data} colors={colors} />
              </td>
              <td>
                <b>$200</b>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default App;
