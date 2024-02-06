// @ts-nocheck
import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import { fade } from 'svelte/transition';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';


import { API_URL,BUCKET_URL } from './config';

import Icons from './icons';
import uuid from './uuid';
import ajaxPost from './ajaxPost.js';
import ajaxGet from './ajaxGet.js';

            export {
            API_URL,
            BUCKET_URL,
            ajaxPost,
            ajaxGet,
                    onMount,
                    toast,
                    fade,
                    get,
                    uuid,
                    goto,
                    browser,
                    Icons,
            }

/*<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} */