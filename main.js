let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
  
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

<script type="text/javascript">
src="//translate.google.com/translate_a/element.js?
cb="googleTranslateElementInit"</script>