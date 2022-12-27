var tooltipTriigerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltipList = tooltipTriigerList.map(function(tooltipTriggerEl){
    return new bootstrap.tooltip(tooltipTriggerEl);
})