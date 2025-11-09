


 let strong =document.querySelectorAll("strong.m");
    strong.forEach((s)=>{
         s.addEventListener("mouseover",()=>{
            s.style.color='blue';
        });
        s.addEventListener("mouseout",()=>{
            s.style.color='black';
        });
    });


    let span =document.querySelectorAll("span.drive");
    span.forEach((spn)=>{
         spn.addEventListener("mouseover",()=>{
            spn.style.color='blue';
        });
        spn.addEventListener("mouseout",()=>{
            spn.style.color='black';
        });
    });



    const ctx = document.getElementById('myChart');

 new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'revenue',
      data: [50, 40, 10, 35, 45, 30, 65],
      backgroundColor: '#3b82f6',
      borderRadius: 5
    }]
  },
    options: {
        plugins: {
      legend: { display: false }
    },
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 80,
          ticks: {
            stepSize: 20
          }
        }
      }
    }
  });

  
    const cnt = document.getElementById('myChart-2');

 new Chart(cnt, {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'revenue',
      data: [40, 20, 30, 60, 90, 40, 110],
      backgroundColor: '#3b82f6',
      borderRadius: 5
    }]
  },
    options: {
        plugins: {
      legend: { display: false }
    },
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 120,
          ticks: {
            stepSize: 20
          }
        }
      }
    }
  });