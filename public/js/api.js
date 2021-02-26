export function runAPI() {
    let data;
    const promise = fetch("/image")
      .then(response => response.json())
      .then(json => {
        data = json;
        console.log(data);
      });
  }