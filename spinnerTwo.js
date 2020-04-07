const spinner = () => {
  let times = 1;
  const drawSpinner = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];
  for (const spin of drawSpinner) {
    times += 1;
    setTimeout(() => process.stdout.write(spin),  (times * 100));
  }
};
spinner();
