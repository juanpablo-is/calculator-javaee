    /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package SessionBean;

import javax.ejb.Local;

/**
 *
 * @author Juan Pablo
 */
@Local
public interface CalcBeanLocal {

    double addition(double number1, double number2);

    double multiplication(double number1, double number2);

    double subtraction(double number1, double number2);

    double division(double number1, double numer2);

    double module(double number1, double number2);
    
    double operacion(double number1, double number2, String operacion);
    
}
