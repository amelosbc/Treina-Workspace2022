package src.bancodigitaloo;

public class contaPoupanca extends conta{
    @Override
    public void imprimirExtrato() {
        System.out.println("Extrato Conta Poupança ");
        super.infosComuns();

    }

}
