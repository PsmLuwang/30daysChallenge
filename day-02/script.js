const sideBarIcon = document.getElementById("sideBarIcon");
const fullSideBar = document.getElementById("fullSideBar");
const halfSideBar = document.getElementById("halfSideBar");
const main = document.getElementById("main");

sideBarIcon.addEventListener("click", () => {
  fullSideBar.classList.toggle("hidden");
  halfSideBar.classList.toggle("hidden");
  main.classList.toggle("resizeMain");
  // main.classList.toggle("max-w-[calc(100%-240px)]")
})

const videoContainer = document.getElementById("videoContainer");
for (let i = 0; i < 20; i++) {
  const video = `
    <div class="w-full flex flex-col gap-3">
      <div class="relative">
        <img src="profile.jpg" alt="thumbnails" class="w-full aspect-[2/1.1] object-cover rounded-[6px]">
        <span class="absolute bottom-2 right-2 text-white font-semibold text-[0.8rem] px-1 rounded-[4px] bg-black/70 ">10:32</span>
      </div>
      <div class="flex justify-between gap-2">
        <img src="profile.jpg" alt="profile" class="h-9 aspect-[1/1] rounded-[50%]">
        <div class="ml-1 font-semibold">
          <h1 class="text-[0.9rem] mb-1">Ariana Grande - we can't be friends (Lyrics)</h1>
          <p class="text-gray-500 text-[0.85rem]">Beautiful Lyrics</p>
          <p class="text-gray-500 text-[0.85rem]">31K views <span>·</span> 3 weeks ago</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical mr-2"></i>
      </div>
    </div>
  `;

  videoContainer.innerHTML += video;
  
}