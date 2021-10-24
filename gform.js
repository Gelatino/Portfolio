<script>
// since it's a form submission we must format the request body properly
// and this function does just the trick!
const urlFormEncoded = (obj) => {
  var str = [];
  for (var p in obj)
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  return str.join("&");
}

const submitFunction = async (event) => {
event.preventDefault(); // this prevents the Form from submitting to server

const firstName = document.getElementById('fname').value;
const lastName = document.getElementById('lname').value;

const requestFormBody = {
    'entry.381772108': firstName,
    'entry.244442038': lastName,
  }
  
  await submitForm(requestFormBody)

}

const submitForm = async (requestFormBody) => {
  try {
    await fetch('https://docs.google.com/forms/u/0/d/e/234234sdfds/formResponse', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded ',
      },
      method: 'POST',
      mode: 'no-cors',
      body: urlFormEncoded(requestFormBody)
    });
  } catch (err) {
    console.error('err:', err);
  }
}
</script>