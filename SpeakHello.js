( function(window){
    var speak="Hello";
     function Hello(names) {

        console.log(speak+ " " +names);
    }
    window.Hello=Hello;

})(window);