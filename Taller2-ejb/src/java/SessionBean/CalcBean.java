package SessionBean;

import javax.ejb.Stateless;

/**
 *
 * @author Juan Pablo
 */
@Stateless
public class CalcBean implements CalcBeanLocal {

    @Override
    public double addition(double number1, double number2) {
        return (number1 + number2);
    }

    @Override
    public double multiplication(double number1, double number2) {
        return (number1 * number2);
    }

    @Override
    public double subtraction(double number1, double number2) {
        return (number1 - number2);
    }

    @Override
    public double division(double number1, double number2) {
//        return (number2 == 0) ? 0 : (number1 / number2);
        return (number1 / number2);
    }

    @Override
    public double module(double number1, double number2) {
//        return (number2 == 0) ? 0 : (number1 % number2);
        return (number1 % number2);
    }

    @Override
    public double operacion(double valor1, double valor2, String operacion) {
        Number total;

        switch (operacion) {
            case "+":
                total = addition(valor1, valor2);
                break;
            case "-":
                total = subtraction(valor1, valor2);
                break;
            case "*":
                total = multiplication(valor1, valor2);
                break;
            case "/":
                total = division(valor1, valor2);
                break;
            case "%":
                total = module(valor1, valor2);
                break;
            default:
                total = 0;
                break;
        }

        return (double) total;
    }

}
