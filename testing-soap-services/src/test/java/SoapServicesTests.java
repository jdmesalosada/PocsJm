import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.path.xml.XmlPath;
import com.jayway.restassured.response.Response;
import org.testng.annotations.Test;

import javax.xml.soap.*;

import static com.jayway.restassured.RestAssured.*;
import static com.jayway.restassured.path.xml.XmlPath.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import java.util.HashMap;
import java.util.Map;

public class SoapServicesTests {

//references: https://github.com/eing/restassured_cli/wiki/RESTAssured-XML-SOAP-service-example

    @Test
    public void testPoc() throws SOAPException {

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


        Response xml = given()
                .baseUri(baseURI)
                .headers(headers)
                .body(myEnvelope)
                .when()
                .post("/calculator.asmx")
                .then()
                .assertThat()
                .contentType(ContentType.XML)
                .statusCode(200)
                .extract().response();


        String prettyXML = with(xml.asString()).prettyPrint();
        System.out.println(prettyXML);

        String actualResult = new XmlPath(xml.asString()).getString("Envelope.Body.AddResponse.AddResult");
        assertThat(actualResult, is("2"));

    }

}
