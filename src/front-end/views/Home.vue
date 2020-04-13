<template>
    <section class="hero is-danger is-bold">
        <div class="is-widescreen test-button">

            <a href="/test" class="fill-div">CLICK ME FOR QUICK TEST</a>
        </div>
        <div class="hero-body">
            <div class="columns container is-fluid is-centered">
                <div class="column is-one-fifth">
                    <img src="@/img/wordsofaffirmation.png" width="150" height="150">
                </div>

                <div class="column is-one-fifth">
                    <img src="@/img/actsofservice.png" width="150" height="150">
                </div>

                <div class="column is-one-fifth">
                    <img src="@/img/receivinggifts.png" width="150" height="150">
                </div>

                <div class="column is-one-fifth">
                    <img src="@/img/qualitytime.png" width="150" height="150">
                </div>

                <div class="column is-one-fifth">
                    <img src="@/img/physicaltouch.png" width="150" height="150">
                </div>
            </div>
            <h1 class="title is-1 has-text-centered">What are Love Languages?</h1>
            <!-- <h2 class="subtitle is-2 has-text-centered"></h2>Basic Layout Skeleton using Bulma CSS Framework</h2> -->
            <div class="columns container is-fluid">
                 <div class="column is-three-quarters">
                <ol>
                    <li> Words of affirmation – using words to build up the other person. “Thanks for taking out the garbage.” Not – “It’s about time you took the garbage out. The flies were going to carry it out for you.” </li>
                    <br>
                    <li> Gifts – a gift says, “He was thinking about me. Look what he got for me.” </li>
                    <br>
                    <li> Acts of Service – Doing something for your spouse that you know they would like. Cooking a meal, washing dishes, vacuuming floors, are all acts of service. </li>
                    <br>
                    <li> Quality time – by which I mean, giving your spouse your undivided attention. Taking a walk together or sitting on the couch with the TV off – talking and listening. </li>
                    <br>
                    <li> Physical touch – holding hands, hugging, kissing, sexual intercourse, are all expressions of love. </li>
                </ol>
                </div>
                <p>
                    Out of these five, each of you has a primary love language which speaks more deeply to you than all the others. Discovering each other’s language and speaking it regularly is the best way to keep love alive in a marriage.
                </p>
                <!-- <div class="column is-three-quarters">
                    <div class="columns container is-fluid">
                        <div class="column is-three-quarters">
                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam quia explicabo earum repellat, et dolore exercitationem tempora. Ab autem fugit dolor iusto corporis quo possimus error. Doloribus alias eius dolorem.
                                Dolor voluptatem rerum quibusdam fugit culpa quas praesentium corporis aliquid magni assumenda sed hic error, ex veniam dolorum eius ut delectus consectetur voluptas et ullam eaque porro tempora. Fuga et magni quidem minima
                                velit quaerat reiciendis error esse recusandae quos libero, enim voluptas. Nostrum animi repudiandae iste quia similique veritatis reprehenderit recusandae consectetur veniam qui quos optio at laborum, soluta sint aut id
                                pariatur labore? Eveniet iure optio blanditiis.</p>
                        </div>
                        <div class="column">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsa soluta, fugit fuga recusandae voluptas saepe voluptates delectus nam odit voluptate sed facilis quis. Ducimus ratione, ad sequi modi dolor laboriosam ut
                                perferendis, impedit et fugiat similique tempora eveniet quia consequatur debitis possimus. Cum perferendis libero sequi error quia expedita?</p>
                        </div>
                    </div>

                </div>
                <div class="column">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique neque beatae sit nobis eveniet dolorem numquam vel tenetur enim incidunt, dolores adipisci repellat porro aspernatur dolore exercitationem tempora! Id sequi
                        quod inventore dolor consectetur consequuntur corporis iure voluptatum laborum repellat aliquam sed, eaque voluptates ipsum. Vitae sit maiores quis!</p>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">
.test-button {
    text-align: center;
    background-color: purple;
    margin-left: 0px;
    padding: 2rem;
    font-weight: bold;
}
.fill-div {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
}
.fill-div:hover {
  color: #eb0784;
}
a:link {
  color: white;
}
a:visited {
  color: white;
}
</style>
