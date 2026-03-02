const form = document.getElementById('form');
const modal = document.getElementById('modal');
const inputCPF = document.getElementById('cpf');
const inputTel = document.getElementById('tel');

form.onsubmit = (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
};

const fechar = () => {
    modal.style.display = 'none';
    form.reset();
};

inputCPF.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = v;
});

inputTel.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
    v = v.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = v;
});