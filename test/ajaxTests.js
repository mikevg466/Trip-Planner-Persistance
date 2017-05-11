

$.ajax({
  method: 'POST',
  url: 'http://localhost:3000/api/days',
  data: {number: 3}
})
.catch(error => console.error(error));

$.ajax({
  method: 'POST',
  url: 'http://localhost:3000/api/days/',
  data: {number: 6}
})
.catch(error => console.error(error));






$.ajax({
  method: 'DELETE',
  url: 'http://localhost:3000/api/days/2'
})
.catch(error => console.error(error));

$.ajax({
  method: 'POST',
  url: 'http://localhost:3000/api/days/3/restaurant',
  data: {id: 4}
})
.catch(error => console.error(error));

$.ajax({
  method: 'DELETE',
  url: 'http://localhost:3000/api/days/3/restaurant',
  data: {id: 5}
})
.catch(error => console.error(error));

$.ajax({
  method: 'POST',
  url: 'http://localhost:3000/api/days/3/activity',
  data: {id: 4}
})
.catch(error => console.error(error));

$.ajax({
  method: 'DELETE',
  url: 'http://localhost:3000/api/days/3/activity',
  data: {id: 5}
})
.catch(error => console.error(error));

$.ajax({
  method: 'POST',
  url: 'http://localhost:3000/api/days/3/hotel',
  data: {id: 4}
})
.catch(error => console.error(error));

$.ajax({
  method: 'Post',
  url: 'http://localhost:3000/api/days/3/hotel',
  data: {id: 5}
})
.catch(error => console.error(error));

$.ajax({
  method: 'DELETE',
  url: 'http://localhost:3000/api/days/3/hotel',
  data: {id: 5}
})
.catch(error => console.error(error));
