function submitForm() {
}

let coresGender = document.getElementsByName('generopessoa');
for (let i = 0; i < coresGender.length; i++) {
    coresGender[i].addEventListener('change', function() {
        
        let crp = document.getElementById('crp');
        if (this.value === 'masculino') {
            crp.classList.remove('cor-rosa', 'cor-roxa', 'cor-amarela');
            crp.classList.add('cor-azul');
        } else if (this.value === 'feminino') {
            crp.classList.remove('cor-azul', 'cor-roxa', 'cor-amarela');
            crp.classList.add('cor-rosa');
        } else if (this.value === 'naobinario') {
            crp.classList.remove('cor-rosa', 'cor-azul', 'cor-amarela');
            crp.classList.add('cor-roxa');
        } else if (this.value === 'fluido') {
            crp.classList.remove('cor-rosa', 'cor-azul', 'cor-roxa');
            crp.classList.add('cor-amarela');
        } else {
            
            crp.classList.remove('cor-azul', 'cor-rosa', 'cor-roxa', 'cor-amarela');
        }
    });
}