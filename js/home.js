const data = [
  {
    id: 1,
    img: `../assets/images/Ja'farxon_imaags/orangimg/help.png`,
    title: `Business strategy`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,`,
    btn: `Learn More`,
  },
  {
    id: 2,
    img: `../assets/images/Ja'farxon_imaags/orangimg/help1.png`,
    title: `Business strategy`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,`,
    btn: `Learn More`,
  },
  {
    id: 3,
    img: `../assets/images/Ja'farxon_imaags/orangimg/help2.png`,
    title: `Business strategy`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,`,
    btn: `Learn More`,
  },
];

const card = [
  {
    id: 1,
    title: `Invoicing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2455 0.302095C16.0352 -0.100698 16.9648 -0.100698 17.7545 0.302094L31.4493 7.28692C33.5169 8.34144 33.5169 11.3512 31.4493 12.4057L29.4544 13.4232L31.4493 14.4406C33.5169 15.4951 33.5169 18.5049 31.4493 19.5594L29.4544 20.5769L31.4493 21.5943C33.5169 22.6488 33.5169 25.6586 31.4493 26.7131L17.7545 33.6979C16.9648 34.1007 16.0352 34.1007 15.2455 33.6979L1.55067 26.7131C-0.51689 25.6586 -0.516887 22.6488 1.55067 21.5943L3.54556 20.5769L1.55067 19.5594C-0.51689 18.5049 -0.516887 15.4951 1.55067 14.4406L3.54556 13.4232L1.55067 12.4057C-0.516892 11.3512 -0.516887 8.34144 1.55067 7.28692L15.2455 0.302095ZM7.3238 12.1509C7.3147 12.1462 7.30555 12.1415 7.29635 12.137L2.80518 9.8463L16.5 2.86148L30.1948 9.8463L25.7034 12.1371C25.6944 12.1416 25.6854 12.1461 25.6764 12.1508L16.5 16.8311L7.3238 12.1509ZM6.68185 15.0228L2.80518 17L7.29618 19.2906L7.32397 19.3047L16.5 23.9848L25.6764 19.3046L25.7035 19.2907L30.1948 17L26.3181 15.0228L17.7545 19.3905C16.9648 19.7933 16.0352 19.7933 15.2455 19.3905L6.68185 15.0228ZM2.80518 24.1537L6.68185 22.1765L15.2455 26.5442C16.0352 26.947 16.9648 26.947 17.7545 26.5442L26.3181 22.1765L30.1948 24.1537L16.5 31.1385L2.80518 24.1537Z" fill="#F58A07"/>
</svg>`,
  },
  {
    id: 2,
    title: `Support`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.8856 1.78073C24.8856 0.797262 24.0946 0 23.1189 0C22.1432 0 21.3522 0.797262 21.3522 1.78073V2.6711H20.4688C19.4931 2.6711 18.7021 3.46836 18.7021 4.45183C18.7021 5.43531 19.4931 6.23257 20.4688 6.23257H21.3522V7.12293C21.3522 8.10641 22.1432 8.90367 23.1189 8.90367C24.0946 8.90367 24.8856 8.10641 24.8856 7.12293V6.23257H25.769C26.7447 6.23257 27.5357 5.43531 27.5357 4.45183C27.5357 3.46836 26.7447 2.6711 25.769 2.6711H24.8856V1.78073ZM21.7135 17.8073C20.3336 16.4165 18.0964 16.4165 16.7165 17.8073L13.036 21.517L1.03492 33.6133C-0.344973 35.0042 -0.344973 37.2592 1.03492 38.65L3.32364 40.9569C4.70353 42.3477 6.94078 42.3477 8.32067 40.9569L20.3218 28.8605L24.0022 25.1509C25.3821 23.76 25.3821 21.5051 24.0022 20.1142L21.7135 17.8073ZM19.0725 25.083L16.7838 22.7762L19.215 20.3257L21.5037 22.6325L19.0725 25.083ZM14.2853 25.2945L16.574 27.6014L5.82215 38.4385L3.53343 36.1317L14.2853 25.2945ZM32.8358 26.711C33.8116 26.711 34.6026 27.5083 34.6026 28.4917C35.5783 28.4917 36.3693 29.289 36.3693 30.2725C36.3693 31.2559 35.5783 32.0532 34.6026 32.0532C34.6026 33.0367 33.8116 33.8339 32.8358 33.8339C31.8601 33.8339 31.0691 33.0367 31.0691 32.0532C30.0934 32.0532 29.3024 31.2559 29.3024 30.2725C29.3024 29.289 30.0934 28.4917 31.0691 28.4917C31.0691 27.5083 31.8601 26.711 32.8358 26.711ZM36.2176 8.01317C35.5276 7.31775 34.409 7.31775 33.7191 8.01317C33.0291 8.70859 33.0291 9.83608 33.7191 10.5315L34.6023 11.4217L33.7191 12.312C33.0291 13.0074 33.0291 14.1349 33.7191 14.8303C34.409 15.5257 35.5276 15.5257 36.2176 14.8303L37.1008 13.9401L37.984 14.8303C38.674 15.5257 39.7926 15.5257 40.4825 14.8303C41.1725 14.1349 41.1725 13.0074 40.4825 12.312L39.5993 11.4217L40.4825 10.5315C41.1725 9.83608 41.1725 8.70859 40.4825 8.01317C39.7926 7.31775 38.674 7.31775 37.984 8.01317L37.1008 8.9034L36.2176 8.01317Z" fill="#F58A07"/>
</svg>`,
  },
  {
    id: 3,
    title: `Surveying`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="34" viewBox="0 0 38 34" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.2678 5.26873C34.4609 7.62616 34.9122 12.0463 32.2556 14.9421L19.0001 29.3913L5.74477 14.9437C3.08767 12.0476 3.53898 7.62685 6.73245 5.26912C10.0009 2.85606 14.7458 3.62579 16.9849 6.93227L17.736 8.04154C18.1857 8.70564 19.1174 8.89789 19.8169 8.47094C20.036 8.3372 20.2063 8.15857 20.3231 7.95588L21.0156 6.93282C23.2541 3.6258 27.9993 2.85557 31.2678 5.26873ZM19.0004 4.69063C15.6348 0.566015 9.31051 -0.256068 4.88378 3.01218C0.325463 6.37758 -0.318738 12.6877 3.47398 16.8215L17.8672 32.5094C18.4134 33.1047 19.3645 33.167 19.9916 32.6484C20.0731 32.581 20.1451 32.5071 20.2075 32.4283L34.5265 16.8199C38.3186 12.6863 37.6744 6.37686 33.1165 3.01179C28.6898 -0.256443 22.3655 0.565939 19.0004 4.69063Z" fill="#F58A07" stroke="#F58A07" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  },
];

let icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 22 10" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6338 0.198869L21.8079 4.51989C22.064 4.78505 22.064 5.21495 21.8079 5.48011L17.6338 9.80113C17.3776 10.0663 16.9623 10.0663 16.7062 9.80113C16.45 9.53597 16.45 9.10606 16.7062 8.8409L19.7606 5.67898L0 5.67898L0 4.32102L19.7606 4.32102L16.7062 1.1591C16.45 0.893936 16.45 0.464029 16.7062 0.198869C16.9623 -0.0662898 17.3776 -0.0662898 17.6338 0.198869Z" fill="#F58A07"/>
</svg>`;

let list = "";

data?.map((item) => {
  list += `
  <div class='card-wrapper-card'>
    <div class="card-img">
       <img src=${item.img} alt=''>
    </div>
      <div class="card-w">
        <h2> ${item.title} </h2>
        <p class="p-w"> ${item.description} </p>
        <p class="p-w1"> ${item.btn} <span> ${icon} </span> </p>

       </div>
 </div> `;
});
document.querySelector(".help-section-card-wrapper").innerHTML = list;

let cards = "";

card?.map((item) => {
  cards += `
     <div class="cards-card">
            <div class="cars-w">
              <p class="icon"> ${item.icon} </p>
              <h2 class="card-title"> ${item.title} </h2>
              <p class="card-dis"> ${item.description}</p>
            </div>
    </div>

  `;
});

document.querySelector(".feaures-section-cards").innerHTML = cards;
