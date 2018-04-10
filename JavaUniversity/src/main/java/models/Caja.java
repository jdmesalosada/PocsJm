package models;

public class Caja {
    private double alto;
    private double profundo;
    private double ancho;
    private double result;

    public double getResult(){
        return this.result;
    }

    public Caja(double ancho, double alto, double profundo) {
        this.ancho = ancho;
        this.profundo = profundo;
        this.alto = alto;

    }

    public void vol() {
        this.result = this.alto * this.ancho * this.profundo;
    }

}
