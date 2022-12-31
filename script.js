
    const shareData = {
  title: 'apni rashi dekhe ',
  text: '2023 me aapki rashi kya kehti hai aapke bare me ',
  url: 'https://premsagar.ml/'
}

const btn = document.querySelector('button');
const resultPara = document.querySelector('.result');

// Share must be triggered by "user activation"
btn.addEventListener('click', async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = ' shared successfully';
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
