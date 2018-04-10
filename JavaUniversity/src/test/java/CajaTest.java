import models.Caja;
import org.testng.annotations.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

public class CajaTest {


    @Test
    public void testVolumen() {
        double expectedResult = 24;
        Caja caja = new Caja(2, 3, 4);
        caja.vol();
        System.out.println(caja.getResult());
        assertThat(caja.getResult(), equalTo(expectedResult));

    }
}
