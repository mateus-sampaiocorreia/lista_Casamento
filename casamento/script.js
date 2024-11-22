// Função para marcar o presente como comprado e mostrar o formulário de confirmação
function marcarComprado(presente) {
    const btn = document.querySelector(`button[onclick="marcarComprado('${presente}')"]`);
    btn.disabled = true; // Desabilitar o botão
    btn.innerText = "Comprado"; // Alterar o texto do botão

    // Exibir a seção de confirmação
    const confirmacaoSection = document.getElementById("confirmacao");
    const confirmacaoMsg = document.getElementById("confirmacao-msg");
    confirmacaoSection.classList.remove("hidden");
    confirmacaoMsg.innerText = `Você escolheu o presente: ${presente}. Por favor, preencha seu nome para confirmar a compra.`;

    // Impedir o formulário de ser enviado sem o nome
    document.getElementById("form-confirmacao").addEventListener("submit", function(event) {
        event.preventDefault();
        alert(`Obrigado, ${document.getElementById('nome').value}, pelo presente!`);
        document.getElementById('nome').value = ""; // Limpar o campo
    });
}
