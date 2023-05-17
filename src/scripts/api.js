function getApi(config, fn) {
  return fetch(config.baseUrl, {
    headers: config.headers,
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result)
      fn(result)
    });
}

export { getApi };
