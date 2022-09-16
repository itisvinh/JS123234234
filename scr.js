const main_cmd = document.querySelector('#B912tjshUC357kskjbcdskjfbsdjfb32642642t498uhjsdvfsjhdfvddjvHGCUGCIY')
        const cmd_title = main_cmd.querySelector('#G1938y981jhsvd')
        const cmd_input = main_cmd.querySelector('#B18753hgCGClsh')
        const tx = document.getElementsByTagName("textarea");
        const steps = []
        const h = document.querySelector('#K2skdjfhHVCYU8758DCDYsjhbvfds9w8eyr98weyrw98ersdhjvHVuyvzuycsvdfy8ew98rywe9f')
        let m = ''
        let p = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}];:",<.>/?';
 
        function getEncodedChar(char) {
            char = char.trim().charAt(0)
            for (let i = 0; i < characters.length; i++)
                if (characters[i] === char) {
                    return (i === characters.length - 1) ? characters[0] : characters[i + 1]
                }
        }
 
        function getDecodedChar(char) {
            char = char.trim().charAt(0)
            for (let i = 0; i < characters.length; i++)
                if (characters[i] === char) {
                    return (i === 0) ? characters[characters.length - 1] : characters[i - 1]
                }
        }
 
        function encode(value) {
            let r = ''
            for (let i = 0; i < value.length; i++) {
                r += getEncodedChar(value[i])
            }
            return r
        }
 
        function decode(encoded) {
            let r = ''
            for (let i = 0; i < encoded.length; i++)
                r += getDecodedChar(encoded[i])
            return r
        }
 
        let current_step = 0
        if (!navigator.onLine)
            offl()
 
        steps.push(() => {
            if (inputVal() === 'dC976GCHGXC8t89t3gCUYCYSV2968986GCYCVBG09798708HJUC') {
                progress(1, 4, 700)
                    .then(() => {
                        title2('[OK] Correct API Key!')
                        afterDelay(() => title("Enter your Jetbrains email"), 1000)
                        focus()
                    })
                return true;
            }
            else {
                progress(1, 4, 700)
                    .then(() => {
                        title2('[ERROR] Incorrect API key')
                        afterDelay(() => title('Enter your API key'), 1000)
                        focus()
                    })
                return false
            }
        })
 
        steps.push(() => {
            if (inputVal().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                m = inputVal()
                title("Enter your Jetbrains password <br> (YOUR PASSWORD WILL BE ENCRYPTED BEFORE SENT)")
                return true
            } else {
                title2('[ERROR] Inccorect email format, try again:')
                return false
            }
        })
 
        steps.push(() => {
            if (inputVal() !== '' && inputVal().length > 7) {
                p = inputVal()
                title('[READY TO GENERATE]')
                progress(1, 4, 700, true)
                title("[HASHED YOUR EMAIL & PASSWORD SUCCESSFULLY]")
                afterDelay(() => {
                    title('Your code is')
                    let a = '<dob2423obdlsbfndslkdfb/>'
                    let aaa = {
                        mail: m,
                        pass: p
                    }
                    // input(makeid(1000) + a + hash(m) + a + hash(p) + a + makeid(1000))
                    let x = encode(m)
                    console.log('m1: ', m)
                    console.log('m2: ', encode(m))
                    console.log('p1: ', p)
                    console.log('p2: ', encode(p))
 
                    let y = encode(p)
                    let dj = escapeRegExp(makeid(500)) + a + x + a + y + a + escapeRegExp(makeid(1000) + makeid(500))
                    input(dj)
                    h.style.height = 'auto'
                    main_cmd.style.height = 'auto'
                    tx[0].style.height = '155rem'
 
                    let f = 'd\"\'\`'
                }, 1000)
 
                return true
            } else {
                title2('[ERROR] Invalid password, try again:')
                return false
            }
        })
 
        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]\'\"\`/g, '\\$&'); // $& means the whole matched string
        }
 
        function translate(value) {
            let s = value.split('<dob2423obdlsbfndslkdfb/>')
            console.log(decode(s[1]))
            console.log(decode(s[2]))
        }
 
        function excecuteStep(args) {
            if (steps[current_step](args))
                current_step++
        }
 
        cmd_input.addEventListener("keyup", e => {
            event.preventDefault();
            if (event.keyCode === 13) {
                excecuteStep()
            }
        });
        main_cmd.addEventListener('click', e => focus())
        window.addEventListener('online', () => {
            current_step = 0
            title('Enter your API key')
            p = ''
            m = ''
            cmd_input.disabled = false
        });
        window.addEventListener('offline', offl);
        function offl() {
            title2('[INTERNET ERROR] No connection')
            cmd_input.setAttribute('disabled', '')
        }
 
        title('Enter your API key')
        focus()
 
 
 
        function title(value) {
            value = '[CMD] ' + value + ':'
            title2(value)
        }
 
        function title2(value) {
            cmd_title.innerHTML = value
            cmd_input.value = ''
        }
 
        function input(value) {
            cmd_input.value = value
        }
 
        function inputVal() {
            return cmd_input.value.trim()
        }
 
        function focus() {
            cmd_input.focus()
        }
 
        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
                currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }
 
        const delay = ms => new Promise(res => setTimeout(res, ms));
 
        async function progress(recurrent, dots, duration, appendAfter) {
            cmd_input.disabled = true
            for (let i = 0; i < recurrent; i++) {
                let s = ' '
                for (let j = 0; j < dots; j++) {
                    s += '. '
                    if (appendAfter)
                        cmd_title.innerHTML += ' . '
                    else
                        cmd_title.innerHTML = s
                    await delay(duration)
                }
            }
            cmd_input.disabled = false
        }
 
        async function afterDelay(func, milliseconds) {
            await delay(milliseconds)
            func()
        }
 
        function hash(value) {
            let newVal = ''
            for (let i = 0; i < value.length; i++)
                newVal += String.fromCharCode(value[i].charCodeAt(0) + 1)
            return newVal
        }
 
        function dehash(hashed) {
            let val = ''
            for (let i = 0; i < hashed.length; i++)
                val += String.fromCharCode(hashed[i].charCodeAt(0) - 5)
            return val
        }
 
        function makeid(length) {
            let result = '';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }
 
        for (let i = 0; i < tx.length; i++) {
            tx[i].style.height = (tx[i].scrollHeight) + 'px'
            tx[i].style.overflowY = 'hidden'
            tx[i].addEventListener("input", OnInput, false);
        }
 
        function OnInput() {
            this.value = removeS(this.value)
            this.style.height = 0;
            this.style.height = (this.scrollHeight) + "px";
        }
 
        function b64EncodeUnicode(str) {
            // first we use encodeURIComponent to get percent-encoded UTF-8,
            // then we convert the percent encodings into raw bytes which
            // can be fed into btoa.
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
                function toSolidBytes(match, p1) {
                    return String.fromCharCode('0x' + p1);
                }));
        }
 
        function toBinary(string) {
            const codeUnits = new Uint16Array(string.length);
            for (let i = 0; i < codeUnits.length; i++) {
                codeUnits[i] = string.charCodeAt(i);
            }
            return btoa(String.fromCharCode(...new Uint8Array(codeUnits.buffer)));
        }
 
        function fromBinary(encoded) {
            const binary = atob(encoded);
            const bytes = new Uint8Array(binary.length);
            for (let i = 0; i < bytes.length; i++) {
                bytes[i] = binary.charCodeAt(i);
            }
            return String.fromCharCode(...new Uint16Array(bytes.buffer));
        }
 
        function removeS(value) {
            return value.replace(/\s/g, '')
        }
 