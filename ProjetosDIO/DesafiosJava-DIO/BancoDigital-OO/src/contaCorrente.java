package src.bancodigitaloo;

public class contaCorrente extends conta{
    @Override
    public void imprimirExtrato() {
        System.out.println("Extrato Conta Corrente ");
        super.infosComuns();

    }

}
