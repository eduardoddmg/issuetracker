var description = document.querySelector('#input-description')
var assigned = document.querySelector('#input-assigned')
const btn_add = document.querySelector('.btn-add')
var div_resultado = document.querySelector('.resultado')

function funcao_option (valor)
{
    quality = valor;
    
}




btn_add.addEventListener('click', () =>
{
   
    var div_central = document.createElement('div')
    div_central.classList.add('item-resposta')
    var text_id = document.createElement('p')
    text_id.classList.add('issue-id')
    var descricao = document.createElement('p')
    var button_open_closed = document.createElement('button')
    button_open_closed.classList.add('open-closed')
    var div_icon_clock = document.createElement('div')
    div_icon_clock.classList.add('icon-item')
    var icon_clock = document.createElement('i')
    icon_clock.classList.add('far')
    icon_clock.classList.add('fa-clock')
    var text_clock = document.createElement('p')
    var div_icon_user = document.createElement('div')
    div_icon_user.classList.add('icon-item')
    var icon_user = document.createElement('i')
    icon_user.classList.add('far')
    icon_user.classList.add('fa-user')
    var text_user = document.createElement('p')
    var group_button = document.createElement('div')
    group_button.classList.add('group-button-resultado')
    var close_btn = document.createElement('button')
    close_btn.classList.add('close-btn')
    var delete_btn = document.createElement('button')
    delete_btn.classList.add('delete-btn')
    div_resultado.appendChild(div_central)
    div_central.appendChild(text_id)
    div_central.appendChild(descricao)
    div_central.appendChild(button_open_closed)
    div_central.appendChild(div_icon_clock)
    div_central.appendChild(div_icon_user)
    div_central.appendChild(group_button)
    div_icon_clock.appendChild(icon_clock)
    div_icon_clock.appendChild(text_clock)
    div_icon_user.appendChild(icon_user)
    div_icon_user.appendChild(text_user)
    group_button.appendChild(close_btn)
    group_button.appendChild(delete_btn)
    text_id.innerHTML = "Issue ID: 98a5cfc5-4105-514b-b71e-db2902fa7123"
    button_open_closed.innerHTML = "open"
    descricao.innerHTML = description.value
    text_user.innerHTML = assigned.value
    close_btn.innerHTML = "Close"
    delete_btn.innerHTML = "Delete"
    close_btn.addEventListener('click', () =>
    {
        button_open_closed.innerHTML = "Close"
        button_open_closed.style.backgroundColor = "orange"
        button_open_closed.style.border = "1px solid orange"
    })
    delete_btn.addEventListener('click', () =>
    {
        div_resultado.removeChild(div_central)
    })
    text_clock.innerHTML =  quality
})