<template lang="">
    <section id="FAQ">
        
            <div class="faq-head">
                <h1>FAQ</h1>
            </div>
            <div class="faq-container">
                <div class="faq-question">
                    <details>
            <summary >When are stipends coming?
            </summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi itaque numquam nostrum tenetur dolore, magnam harum? Dolore ipsum repellendus perferendis velit voluptas repellat debitis quibusdam! Possimus sit eveniet nihil.</p>
        </details>
                </div>
                <div class="faq-question">
                    <details>
            <summary>How do I set-up a SARS account?
            </summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi itaque numquam nostrum tenetur dolore, magnam harum? Dolore ipsum repellendus perferendis velit voluptas repellat debitis quibusdam! Possimus sit eveniet nihil.</p>
        </details>
                </div>
            </div>

        
    </section>
</template>
<script>
export default {
    
}
</script>
<style>
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
}

#FAQ{
    min-height: 100vh;
    width:50%;
    display:flex;
    flex-direction: column;
    align-items: left;
    margin:0 auto;
    padding-top:5em;

    font-family: "Poppins", system-ui;
        font-style: normal;
}

.faq-head>h1, summary{
    width:fit-content;

}
.faq-head{
    font-size:2ch;
    font-weight:600;
    padding:1em;
}
summary{
        font-weight: 600;
        padding-bottom:.5em;
}

.faq-question{
    border: 2px solid transparent;
    border-image: linear-gradient(90deg,#969696, #96969600);
    border-image-slice: 1;
    border-top:none;
    border-left:none;
    padding:2em 0 2em 0;
}
/*
details{
} */

    
</style>