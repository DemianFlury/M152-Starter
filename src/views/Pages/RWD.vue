<template>
    <ul class="people">
        <li v-for="index in 10" :key="index" class="person">
            <img class="person__image" src="https://source.unsplash.com/300x300/?portrait" />
            <div class="person__inner">
                <div class="person__title">
                    Andi Moser
                </div>
                <div class="person__text">
                    Web Entwickler
                </div>
                <button class="person__button">Kontaktieren</button>
            </div>
        </li>
    </ul>
</template>
<style lang="scss">
.people {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    list-style-type: none;

    @media all and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }

    @media all and (max-width: 550px) {
        grid-template-columns: 1fr;
    }

    .person {
        &__image {
            border-radius: 50%;
            width: 100%;
        }
        &__inner {
            text-align: center;
        }
        &__title {
            font-size: 2rem;
            font-weight: bold;
        }
        &__button {
            background-color: teal;
            border-radius: 5px;
            color: white;
            padding: 10px;
            border: none;
            margin: 30px 0 0;
        }
        margin-bottom: 40px;
            
        @media all and (max-width: 900px) {
            display: flex;
            grid-template-columns: 1fr 1fr;

            &__image{
                display: block;
                width: 50%;
            }
        }
        
        @media all and (max-width: 550px) {
            grid-template-columns: 1fr;
            display: unset;

            &__image{
                width: 100%;
            }
        }
    }
}
</style>