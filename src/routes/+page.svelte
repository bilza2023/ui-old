    
<script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,Centre} from '$lib/cmp';
import { Howl } from 'howler';
import {Icons,toast} from '$lib/util';
import Examples from '$lib/appComp/Examples.svelte';
// import MainNav from '$lib/appComp/MainNav.svelte';
import BooksImages from '$lib/homePage/BooksImages.svelte';
import {BUCKET_URL} from '$lib/util';

let sound;
async function play() {
  try {
//   debugger;
  const url = `${BUCKET_URL}/mp3/test.mp3`
    sound = new Howl({
      src: [url],
      volume: 1.0,
      html5: true,
      onload: function () {
        sound.play();
        toast.push("Playing..");
      },
      onloaderror: function (id, error) {
        toast.push("Sound Error")
      },
    });
  } catch (e) {
    toast.push('failed to load sound');
  }
}

function stop(){sound.stop();toast.push("Stopped..");}
</script>

<!-- <MainNav/> -->
<PageWrapper>

<Centre>
    <HdgWithIcon bgColor='bg-stone-600' icon={Icons.BOOKS}> Your Online Home Tutor</HdgWithIcon>
</Centre>


<Centre>
<div class="bg-gray-700 rounded-md w-full mx-8">
<div class='flex  justify-center gap-1   p-2 m-2'>

<BooksImages tcode='fbise9math' />
<BooksImages tcode='matrices' />

</div>

</div>


</Centre>

<Centre>

<button class="bg-green-900 p-2 m-3 rounded-md" on:click={play}>Play Test</button>
<button class="bg-green-900 p-2 m-3 rounded-md" on:click={stop}>Stop Sound</button>
</Centre>


<br/>
<Examples />
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>

<br/>
</PageWrapper>
