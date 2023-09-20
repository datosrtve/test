
$( document ).ready(function() {
		
    var locale = d3.formatLocale({
      decimal: ",",
      thousands: ".",
      grouping: [3]
    });
  
     var legendRenta = d3
    .select("div#leyenda")
    .append("svg")
    .attr("width", 300)
    .attr("height", 80)
    
    .attr("class", "menu")
    .attr("transform", "translate(100,50)")
    
    var init_position = [-3.61726, 38.62880]
  
    /** CLICK de los button*/ 
    $("#Renta").on("click", function () {
      map.getLayer('Municipios-fill');
      map.setLayoutProperty('Municipios-fill','visibility','visible');
      map.setLayoutProperty('SeccionesCensales-fill', 'visibility', 'visible');

      map.setLayoutProperty('Municipiosprevia-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesprevia-fill', 'visibility', 'none');
      
      map.setLayoutProperty('Variaciones-fill', 'visibility', 'none');
      map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosSalario-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesSalario-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosPensiones-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesPensiones-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosDesempleo-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesDesempleo-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosOtrasPrestaciones-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesOtrasPrestaciones-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosOtrosIngresos-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesOtrosIngresos-fill', 'visibility', 'none');


              var legendRentaActual = d3.legendColor()
              .labels((["Menor renta", "" , "", "Mayor renta"]))
              .title("Renta 2020")
              .shapeWidth(50)
                        
              .orient('horizontal')
              .scale(color_escalarenta);
    
              legendRenta.
              call(legendRentaActual);
    
              d3.selectAll("#Renta")
                .classed("active", true);
    
              d3.selectAll("#RentaPrevia")
                .classed("active", false);
    
              d3.selectAll("#VarRenta")
                .classed("active", false);
              
              d3.selectAll("#Salarios")
                .classed("active", false);
              
              d3.selectAll("#Pensiones")
                .classed("active", false);

              d3.selectAll("#Desempleo")
                .classed("active", false);

              d3.selectAll("#OtrasPrestaciones")
                .classed("active", false);

              d3.selectAll("#OtrosIngresos")
                .classed("active", false);
  
      popup.remove();          
              
    })
    
    /*previa*/
    $("#RentaPrevia").on("click", function () {
      map.getLayer('Municipiosprevia-fill');
      map.setLayoutProperty('Municipiosprevia-fill', 'visibility', 'visible');
      map.setLayoutProperty('SeccionesCensalesprevia-fill', 'visibility', 'visible');

      map.setLayoutProperty('Municipios-fill','visibility','none');
      map.setLayoutProperty('SeccionesCensales-fill', 'visibility', 'none');

      map.setLayoutProperty('Variaciones-fill', 'visibility', 'none');
      map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosSalario-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesSalario-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosPensiones-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesPensiones-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosDesempleo-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesDesempleo-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosOtrasPrestaciones-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesOtrasPrestaciones-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosOtrosIngresos-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesOtrosIngresos-fill', 'visibility', 'none');
  
      var legendRentaPrevia = d3.legendColor()
      .labels((["Menor renta" ,"", "", "Mayor renta"]))
      .title("Renta 2019")
      .shapeWidth(50)
              
  
      .orient('horizontal')
      .scale(color_escalarenta);
  
      legendRenta.
      call(legendRentaPrevia);
  
      d3.selectAll("#RentaPrevia")
      .classed("active", true);
  
      d3.selectAll("#Renta")
        .classed("active", false);
  
      d3.selectAll("#VarRenta")
        .classed("active", false);

      d3.selectAll("#Salarios")
        .classed("active", false);
      
      d3.selectAll("#Pensiones")
        .classed("active", false);

      d3.selectAll("#Desempleo")
        .classed("active", false);

      d3.selectAll("#OtrasPrestaciones")
        .classed("active", false);

      d3.selectAll("#OtrosIngresos")
        .classed("active", false);
    
      popup.remove();  
            
    })


    /*SALARIOS*/
    $("#Salarios").on("click", function () {
        map.getLayer('MunicipiosSalario-fill');
        map.setLayoutProperty('MunicipiosSalario-fill', 'visibility', 'visible');
        map.setLayoutProperty('SeccionesCensalesSalario-fill', 'visibility', 'visible');

        map.setLayoutProperty('Municipios-fill','visibility','none');
        map.setLayoutProperty('SeccionesCensales-fill', 'visibility', 'none');
  
        map.setLayoutProperty('Municipiosprevia-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesprevia-fill', 'visibility', 'none');
        
        map.setLayoutProperty('Variaciones-fill', 'visibility', 'none');
        map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosPensiones-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesPensiones-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosDesempleo-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesDesempleo-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosOtrasPrestaciones-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesOtrasPrestaciones-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosOtrosIngresos-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesOtrosIngresos-fill', 'visibility', 'none');
  
  
                var legendRentaSalarios = d3.legendColor()
                .labels((["Menor salario", "" , "", "Mayor salario"]))
                .title("Salarios")
                .shapeWidth(50)
                          
                .orient('horizontal')
                .scale(color_escalarenta_salarios);
      
                legendRenta.
                call(legendRentaSalarios);

                d3.selectAll("#Salarios")
                  .classed("active", true);

                d3.selectAll("#Renta")
                  .classed("active", false);
      
                d3.selectAll("#RentaPrevia")
                  .classed("active", false);
      
                d3.selectAll("#VarRenta")
                  .classed("active", false);
                
                d3.selectAll("#Pensiones")
                  .classed("active", false);
  
                d3.selectAll("#Desempleo")
                  .classed("active", false);
  
                d3.selectAll("#OtrasPrestaciones")
                  .classed("active", false);
  
                d3.selectAll("#OtrosIngresos")
                  .classed("active", false);
    
        popup.remove();          
                
      })


    /*PENSIONES*/
    $("#Pensiones").on("click", function () {
        map.getLayer('MunicipiosPensiones-fill');
        map.setLayoutProperty('MunicipiosPensiones-fill', 'visibility', 'visible');
        map.setLayoutProperty('SeccionesCensalesPensiones-fill', 'visibility', 'visible');
  
        map.setLayoutProperty('MunicipiosSalario-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesSalario-fill', 'visibility', 'none');

        map.setLayoutProperty('Municipios-fill','visibility','none');
        map.setLayoutProperty('SeccionesCensales-fill', 'visibility', 'none');
  
        map.setLayoutProperty('Municipiosprevia-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesprevia-fill', 'visibility', 'none');
        
        map.setLayoutProperty('Variaciones-fill', 'visibility', 'none');
        map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosDesempleo-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesDesempleo-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosOtrasPrestaciones-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesOtrasPrestaciones-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosOtrosIngresos-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesOtrosIngresos-fill', 'visibility', 'none');
  
  
                var legendRentaPensiones = d3.legendColor()
                .labels((["Menor pensión", "" , "", "Mayor pensión"]))
                .title("Pensiones")
                .shapeWidth(50)
                          
                .orient('horizontal')
                .scale(color_escalarenta_pensiones);
      
                legendRenta.
                call(legendRentaPensiones);

                d3.selectAll("#Pensiones")
                  .classed("active", true);

                d3.selectAll("#Salarios")
                  .classed("active", false);

                d3.selectAll("#Renta")
                  .classed("active", false);
      
                d3.selectAll("#RentaPrevia")
                  .classed("active", false);
      
                d3.selectAll("#VarRenta")
                  .classed("active", false);
                
                d3.selectAll("#Desempleo")
                  .classed("active", false);
  
                d3.selectAll("#OtrasPrestaciones")
                  .classed("active", false);
  
                d3.selectAll("#OtrosIngresos")
                  .classed("active", false);
    
        popup.remove();          
                
      })


      /*DESEMPLEO*/
    $("#Desempleo").on("click", function () {
        map.getLayer('MunicipiosDesempleo-fill');
        map.setLayoutProperty('MunicipiosDesempleo-fill', 'visibility', 'visible');
        map.setLayoutProperty('SeccionesCensalesDesempleo-fill', 'visibility', 'visible');
  
        map.setLayoutProperty('MunicipiosPensiones-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesPensiones-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosSalario-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesSalario-fill', 'visibility', 'none');

        map.setLayoutProperty('Municipios-fill','visibility','none');
        map.setLayoutProperty('SeccionesCensales-fill', 'visibility', 'none');
  
        map.setLayoutProperty('Municipiosprevia-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesprevia-fill', 'visibility', 'none');
        
        map.setLayoutProperty('Variaciones-fill', 'visibility', 'none');
        map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosOtrasPrestaciones-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesOtrasPrestaciones-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosOtrosIngresos-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesOtrosIngresos-fill', 'visibility', 'none');
  
  
                var legendRentaDesempleo = d3.legendColor()
                .labels((["Menor desempleo", "" , "", "Mayor desempleo"]))
                .title("Desempleo")
                .shapeWidth(50)
                          
                .orient('horizontal')
                .scale(color_escalarenta_desempleo);
      
                legendRenta.
                call(legendRentaDesempleo);

                d3.selectAll("#Desempleo")
                  .classed("active", true);

                d3.selectAll("#Pensiones")
                  .classed("active", false);

                d3.selectAll("#Salarios")
                  .classed("active", false);

                d3.selectAll("#Renta")
                  .classed("active", false);
      
                d3.selectAll("#RentaPrevia")
                  .classed("active", false);
      
                d3.selectAll("#VarRenta")
                  .classed("active", false);
  
                d3.selectAll("#OtrasPrestaciones")
                  .classed("active", false);
  
                d3.selectAll("#OtrosIngresos")
                  .classed("active", false);
    
        popup.remove();          
                
      })

      /*OTRAS PRESTACIONES*/
    $("#OtrasPrestaciones").on("click", function () {
        map.getLayer('MunicipiosOtrasPrestaciones-fill');
        map.setLayoutProperty('MunicipiosOtrasPrestaciones-fill', 'visibility', 'visible');
        map.setLayoutProperty('SeccionesCensalesOtrasPrestaciones-fill', 'visibility', 'visible');
  
        map.setLayoutProperty('MunicipiosDesempleo-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesDesempleo-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosPensiones-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesPensiones-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosSalario-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesSalario-fill', 'visibility', 'none');

        map.setLayoutProperty('Municipios-fill','visibility','none');
        map.setLayoutProperty('SeccionesCensales-fill', 'visibility', 'none');
  
        map.setLayoutProperty('Municipiosprevia-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesprevia-fill', 'visibility', 'none');
        
        map.setLayoutProperty('Variaciones-fill', 'visibility', 'none');
        map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosOtrosIngresos-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesOtrosIngresos-fill', 'visibility', 'none');
  
  
                var legendRentaOtrasPrestaciones = d3.legendColor()
                .labels((["Menor prestación", "" , "", "Mayor prestación"]))
                .title("Otras Prestaciones")
                .shapeWidth(50)
                          
                .orient('horizontal')
                .scale(color_escalarenta_otras_prestaciones);
      
                legendRenta.
                call(legendRentaOtrasPrestaciones);

                d3.selectAll("#OtrasPrestaciones")
                  .classed("active", true);
                
                d3.selectAll("#Desempleo")
                  .classed("active", false);

                d3.selectAll("#Pensiones")
                  .classed("active", false);

                d3.selectAll("#Salarios")
                  .classed("active", false);

                d3.selectAll("#Renta")
                  .classed("active", false);
      
                d3.selectAll("#RentaPrevia")
                  .classed("active", false);
      
                d3.selectAll("#VarRenta")
                  .classed("active", false);
                
                d3.selectAll("#OtrosIngresos")
                  .classed("active", false);
    
        popup.remove();          
                
      })


      /*OTROS INGRESOS*/
    $("#OtrosIngresos").on("click", function () {
        map.getLayer('MunicipiosOtrasIngresos-fill');
        map.setLayoutProperty('MunicipiosOtrosIngresos-fill', 'visibility', 'visible');
        map.setLayoutProperty('SeccionesCensalesOtrosIngresos-fill', 'visibility', 'visible');
  
        map.setLayoutProperty('MunicipiosOtrasPrestaciones-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesOtrasPrestaciones-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosDesempleo-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesDesempleo-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosPensiones-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesPensiones-fill', 'visibility', 'none');
  
        map.setLayoutProperty('MunicipiosSalario-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesSalario-fill', 'visibility', 'none');

        map.setLayoutProperty('Municipios-fill','visibility','none');
        map.setLayoutProperty('SeccionesCensales-fill', 'visibility', 'none');
  
        map.setLayoutProperty('Municipiosprevia-fill', 'visibility', 'none');
        map.setLayoutProperty('SeccionesCensalesprevia-fill', 'visibility', 'none');
        
        map.setLayoutProperty('Variaciones-fill', 'visibility', 'none');
        map.setLayoutProperty('VariacionesMun-fill', 'visibility', 'none');
  
                var legendRentaOtrosIngresos = d3.legendColor()
                .labels((["Menor ingreso", "" , "", "Mayor ingreso"]))
                .title("Otros Ingresos")
                .shapeWidth(50)
                          
                .orient('horizontal')
                .scale(color_escalarenta_otros_ingresos);
      
                legendRenta.
                call(legendRentaOtrosIngresos);

                d3.selectAll("#OtrosIngresos")
                  .classed("active", true);

                d3.selectAll("#OtrasPrestaciones")
                  .classed("active", false);
                
                d3.selectAll("#Desempleo")
                  .classed("active", false);

                d3.selectAll("#Pensiones")
                  .classed("active", false);

                d3.selectAll("#Salarios")
                  .classed("active", false);

                d3.selectAll("#Renta")
                  .classed("active", false);
      
                d3.selectAll("#RentaPrevia")
                  .classed("active", false);
      
                d3.selectAll("#VarRenta")
                  .classed("active", false);
                
    
        popup.remove();          
                
      })



    /*Variacion*/
    $("#VarRenta").on("click", function () {
      map.getLayer('VariacionesMun-fill');
      map.setLayoutProperty('VariacionesMun-fill','visibility','visible');
      map.setLayoutProperty('Variaciones-fill', 'visibility', 'visible');

      map.setLayoutProperty('Municipiosprevia-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesprevia-fill', 'visibility', 'none');

      map.setLayoutProperty('Municipios-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensales-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosOtrasPrestaciones-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesOtrasPrestaciones-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosOtrosIngresos-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesOtrosIngresos-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosDesempleo-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesDesempleo-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosPensiones-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesPensiones-fill', 'visibility', 'none');

      map.setLayoutProperty('MunicipiosSalario-fill', 'visibility', 'none');
      map.setLayoutProperty('SeccionesCensalesSalario-fill', 'visibility', 'none');

  
      var legendVarRenta= d3.legendColor()
      .labels(([
        "Baja", "",
        "", "Sube"]))
      .title("Variación Renta 2019 - 2020")
      .shapeWidth(50)
    
  
      .orient('horizontal')
      .scale(color_escalarenta_variacion);
  
      legendRenta.
      call(legendVarRenta);
  
      d3.selectAll("#VarRenta")
      .classed("active", true);
  
      d3.selectAll("#Renta")
        .classed("active", false);
  
      d3.selectAll("#RentaPrevia")
        .classed("active", false);

      d3.selectAll("#OtrosIngresos")
        .classed("active", false);

      d3.selectAll("#OtrasPrestaciones")
        .classed("active", false);
      
      d3.selectAll("#Desempleo")
        .classed("active", false);

      d3.selectAll("#Pensiones")
        .classed("active", false);

      d3.selectAll("#Salarios")
        .classed("active", false);
  
      popup.remove();
    
    })
  
    })
  