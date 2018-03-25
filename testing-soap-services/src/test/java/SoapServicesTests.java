import com.jayway.restassured.http.ContentType;
import org.testng.annotations.Test;

import javax.activation.DataHandler;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import javax.xml.soap.SOAPException;
import javax.xml.stream.XMLStreamException;
import javax.xml.transform.stream.StreamSource;
import java.io.IOException;
import java.io.StringReader;
import java.util.HashMap;
import java.util.Map;

import static com.jayway.restassured.RestAssured.given;

public class SoapServicesTests {

//references: https://github.com/eing/restassured_cli/wiki/RESTAssured-XML-SOAP-service-example

    @Test
    public void testPoc() throws JAXBException, XMLStreamException, SOAPException, IOException {

        String baseURI = "http://www.dneonline.com/";

        Map<String, String> headers = new HashMap<String, String>();
        headers.put("SOAPAction", "http://tempuri.org/Add");
        headers.put("Content-Type", "text/xml; charset=utf-8");

        /*MessageFactory messageFactory = MessageFactory.newInstance();
        SOAPMessage soapMessage = messageFactory.createMessage();
        SOAPPart soapPart = soapMessage.getSOAPPart();
        SOAPEnvelope envelope = soapPart.getEnvelope();
        SOAPBody soapBody = envelope.getBody();*/

        String myEnvelope = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
                "<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n" +
                "  <soap:Body>\n" +
                "    <Add xmlns=\"http://tempuri.org/\">\n" +
                "      <intA>1</intA>\n" +
                "      <intB>1</intB>\n" +
                "    </Add>\n" +
                "  </soap:Body>\n" +
                "</soap:Envelope>";


        String xmlResponse = given()
                .baseUri(baseURI)
                .headers(headers)
                .body(myEnvelope)
                .when()
                .post("/calculator.asmx")
                .then()
                .assertThat()
                .contentType(ContentType.XML)
                .statusCode(200)
                .extract().response().asString();

        //String prettyXML = with(xml.asString()).prettyPrint();
        System.out.print(xmlResponse);
      /*  String actualResult = new XmlPath(xml.asString()).getString("Envelope.Body.AddResponse.AddResult");
        assertThat(actualResult, is("2"));*/


        JAXBContext jaxbContext = JAXBContext.newInstance(org.tempuri.AddResponse.class);
        Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();

        StringReader reader = new StringReader(xmlResponse);
        org.tempuri.AddResponse car = (org.tempuri.AddResponse) jaxbUnmarshaller.unmarshal(reader);
        System.out.print(car);
    }

}
