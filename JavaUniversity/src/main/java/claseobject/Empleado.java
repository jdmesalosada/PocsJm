package claseobject;

public class Empleado {

    private String nombre;
    private double sueldo;

    public Empleado(String nombre, double sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getSueldo() {
        return sueldo;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }

    @Override
    public String toString() {
        return "Empleado { nombre = " + nombre + ",sueldo = " + sueldo + " }";
    }

    @Override
    public boolean equals(Object object) {
        if (object == null) {
            return false;
        }
        if (object instanceof Empleado) {
            Empleado emp = (Empleado) object;

            if (this.nombre.equals(emp.nombre) && Double.valueOf(this.sueldo).equals(emp.sueldo)) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    public int hashCode(){
        int hash = 7;
        hash = 31 * hash + this.nombre.hashCode();
        hash = 31 * hash + Double.valueOf(this.sueldo).hashCode();
        return hash;
    }

}
