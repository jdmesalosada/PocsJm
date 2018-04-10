import claseobject.Empleado;
import org.testng.annotations.Test;

public class ClaseObjectTest {


    @Test
    public void test() {
        Empleado emp1 = new Empleado("Juan", 10000);
        Empleado emp2 = new Empleado("Juan", 10000);
        compararObjetos(emp1, emp2);


    }

    public static void compararObjetos(Empleado emp1, Empleado emp2){

        if(emp1 == emp2){
            System.out.println("Los objetos tienen la misma direccion de memoria");
        }
        else{
            System.out.println("Los objetos NO tienen la misma direccion de memoria");
        }

        if(emp1.equals(emp2)){
            System.out.println("Los objetos tienen el mismo contenido");
        }
        else{
            System.out.println("Los objetos NO tienen el mismo contenido");
        }

        if(emp1.hashCode() == emp2.hashCode()){
            System.out.println("Los objetos tienen el mismo hash");
        }
        else{
            System.out.println("Los objetos NO tienen el mismo hash");
        }

    }


}
