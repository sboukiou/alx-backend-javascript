// function loadBalancer(chinaDownload, USDownload) {
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

// const rabbit = new Promise((resolve) => setTimeout(resolve, 1000, 'The rabbit'));
// const turtle = new Promise((resolve) => setTimeout(resolve, 1500, 'The turtle'));

// loadBalancer(rabbit, turtle)
//   .then((result) => console.log(result));
// console.log('done');
