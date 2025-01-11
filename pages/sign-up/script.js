const nameInput = document.querySelector("[name='name']");
const emailInput = document.querySelector("[name='email']");
const passwordInput = document.querySelector("[name='password']");

const cadastrarUsuario = async (event) => {
  event.preventDefault();
  if (!nameInput.value || !emailInput.value || !passwordInput.value) {
    alert("Preencha os campos corretamente");
    return;
  }
  try {
    await api.post("/usuarios", {
      nome: nameInput.value,
      email: emailInput.value,
      senha: passwordInput.value,
    });

    alert("Cadastro executado com sucesso");

    limparCampos();
    location.href = "/index.html";
  } catch (error) {
    alert(error.response.data);
  }
};

const limparCampos = () => {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
};
