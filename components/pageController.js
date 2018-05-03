(function () {
    angular.module("classifieds", ['zingchart-angularjs','scania.angular.select2'])
        .controller("classifiedsctrl", function ($scope, $http) {

            $scope.arr =[];
            $scope.arrBar = [];
            $scope.monthName = "February";
            $scope.monthNameBar = "April";
            $scope.monthCalls = "Incoming call";
           
//line

// var ctxL = document.getElementById("lineChart").getContext('2d');
// var myLineChart = new Chart(ctxL, {
//     type: 'line',
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [
//             {
//                 label: "My First dataset",
//                 fillColor: "rgba(220,220,220,0.2)",
//                 strokeColor: "rgba(220,220,220,1)",
//                 pointColor: "rgba(220,220,220,1)",
//                 pointStrokeColor: "#fff",
//                 pointHighlightFill: "#fff",
//                 pointHighlightStroke: "rgba(220,2x20,220,1)",
//                 data: [65, 59, 80, 81, 56, 55, 40]
//             },
//             {
//                 label: "My Second dataset",
//                 fillColor: "rgba(151,187,205,0.2)",
//                 strokeColor: "rgba(151,187,205,1)",
//                 pointColor: "rgba(151,187,205,1)",
//                 pointStrokeColor: "#fff",
//                 pointHighlightFill: "#fff",
//                 pointHighlightStroke: "rgba(151,187,205,1)",
//                 data: [28, 48, 40, 19, 86, 27, 90]
//             }
//         ]
//     },
//     options: {
//         responsive: true
//     }    
// });
// $scope.$watch(function() {
//     $('.selectpicker').selectpicker('refresh');
// });

// JSON data fornumber of months.

$scope.Months = [
    {
        "id":1,
        "month": "January"
    },
    {
        "id":2,
        "month": "February"
    },
    {
        "id":3,
        "month": "March"
    },
    {  
        "id":4,
         "month": "April"
    },
    {
        "id":5,
        "month": "May"
    },
    {
        "id":6,
        "month": "June"
    }        
]



$scope.calls = [
    {   "id":1,
        "calling":"Incoming Calls"

},
{     "id":2,
    "calling":"Outgoing Calls"
}
]

// JSON Data for Line Chart
$scope.myJson = {
    type : 'line',
    series : [       
      { 
        values : [54,23,34,23,43],
       text: "January",
       "marker":{
        "background-color":"orange",
        "size":9
      }
      } ,
       {values : [0,15,16,20,40],
        text: "January",
    },
       { values : [4,23,34,23,43] ,
       text: "February"},
       {values : [2,6,26,10,30], 
       text: "February"},
       { 
        values : [4,2,34,33,43],
       text: "March"
      } ,
       {values : [0,23,70,10,50],
        text: "March"},
       { values : [4,13,38,29,33] ,
       text: "April"},
       {values : [2,6,66,10,30], 
       text: "April"},
       { 
        values : [44,13,34,23,43],
       text: "May"
      } ,
       {values : [7,15,16,20,40],
        text: "May"},
       { values : [8,23,44,23,43] ,
       text: "June"},
       {values : [2,6,26,60,30], 
       text: "June"}
     
    ]
};
console.log($scope.monthName)
console.log("hi")
console.log($scope.monthNameBar)
console.log($scope.monthCalls)
// alert($scope.myJson.series.length)
$scope.selectValue = function(monthName){
    $scope.arr = [];
    console.log("inside loop")
    console.log($scope.monthName)
for(var i=0;i<$scope.myJson.series.length;i++)
  {
    if($scope.monthName == $scope.myJson.series[i].text)
      {
        $scope.arr.push({values:$scope.myJson.series[i].values})
      }
  }
  console.log($scope.arr)
  $scope.aLine ={
    type:'line',
    series:$scope.arr    
  }
}
//bar
//JSON Data for Bar Chart
$scope.myJsonBar = {
    type : 'bar',
    series : [       
      { 
        values : [54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,54,23,34,11,67,43],
       text: "January",
       call:"Incoming Calls"
      } ,
       {values : [0,15,16,20,40,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,54,12,33],
         text: "February",
         call:"Incoming Calls"},
       { values : [4,23,34,23,43,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,16,20,40,16,20,20,16,20,40,11],
         text : "March",
         call:"Incoming Calls"} ,
       {values : [0,5,16,20,40,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,1,23,56,32,4,44,77,76,12,34,54],
         text : "April",
         call:"Incoming Calls"},
       {values : [0,5,16,20,40,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,12,34,23,54,65,56,8,11,34,11,21,66],
         text : "May",
         call:"Incoming Calls"},
       {values : [0,5,16,20,40,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,23,55,34,1,76,34,65,12,34,76,44],
         text : "June",
         call:"Incoming Calls"},
         { 
            values : [54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,54,23,34,11,67,43],
           text: "January",
           call:"Outgoing Calls"
          } ,
           {values : [22,15,16,20,20,54,23,34,23,43,44,13,36,53,43,54,23,34,23,43,54,23,34,23,43,54,22,31],
             text: "February",
             call:"Outgoing Calls"},
           { values : [0,5,16,20,40,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,12,34,23,54,65,56,8,11,34,11,21,66],
             text : "March",
             call:"Outgoing Calls"} ,
           {values : [0,5,16,20,40,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,23,55,34,1,76,34,65,12,34,76,44],
             text : "April",
             call:"Outgoing Calls"},
           {values : [4,23,34,23,43,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,16,20,40,,16,20,20,16,20,40,11],
             text : "May",
             call:"Outgoing Calls"},
           {values : [0,5,16,20,40,54,23,34,23,43,54,23,34,23,43,54,23,34,23,43,1,23,56,32,4,44,77,76,12,34,54],
             text : "June",
             call:"Outgoing Calls"}
     
    ]
};


$scope.displayBar = function(){
    $scope.arrBar = [];
    console.log($scope.monthNameBar)
    console.log($scope.monthCalls)
for(var i=0;i<$scope.myJsonBar.series.length;i++)
{
    
  if($scope.monthNameBar == $scope.myJsonBar.series[i].text && $scope.monthCalls==$scope.myJsonBar.series[i].call)
    {
      $scope.arrBar.push({values:$scope.myJsonBar.series[i].values})
    }
    $scope.total = 0;
    for(var j=0;j<$scope.myJsonBar.series[i].values.length;j++){
        
        $scope.total = $scope.total + $scope.myJsonBar.series[i].values[j];
    }
}

console.log($scope.arrBar)
$scope.aBar ={
  type:'bar',
  series:$scope.arrBar    
}
}


$scope.onLoad = function(){
    $scope.arr = [];
    console.log("inside loop")
    console.log($scope.monthName)
for(var i=0;i<$scope.myJson.series.length;i++)
  {
    if($scope.monthName == $scope.myJson.series[i].text)
      {
        $scope.arr.push({values:$scope.myJson.series[i].values})
      }
  }
  console.log($scope.arr)
  $scope.aLine ={
    type:'line',
    series:$scope.arr    
  }
 }();

 $scope.onLoad1 = function(){
    console.log($scope.monthNameBar)
    console.log($scope.monthCalls)
for(var i=0;i<$scope.myJsonBar.series.length;i++)
{
  if($scope.monthNameBar == $scope.myJsonBar.series[i].text && "Incoming Calls"==$scope.myJsonBar.series[i].call)
    {
      $scope.arrBar.push({values:$scope.myJsonBar.series[i].values})
    }
}
console.log($scope.arrBar)
$scope.aBar ={
  type:'bar',
  series:$scope.arrBar    
}
}();

// var ctxB = document.getElementById("barChart").getContext('2d');
// var myBarChart = new Chart(ctxB, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     optionss: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

//JSON Data for Details of the employees.

$scope.details = [
    {
        "id": "12",
        "user": "Ryan Smith",
        "img": "https://randomuser.me/api/portraits/women/16.jpg",
        "role": "UI Developer"
     
    },
    {
        "id": "2",
        "user": "Bertha	Keller",
        "img": "https://randomuser.me/api/portraits/women/73.jpg",
        "role": "UI/UX Designer"
    
    },
    {
        "id": "3",
        "user": "Marian	Harris",
        "img": "https://randomuser.me/api/portraits/women/12.jpg",
        "role": "Project Manager"
     
    },
    {
        "id": "4",
        "user": "Chester Dixon",
        "img": "https://randomuser.me/api/portraits/women/73.jpg",
        "role": "Web Designer"
    }

];


});

})();

