<template>
    <div>
        <h1>Login page</h1>
        <div class="input">
            <label for="">Email</label>
            <input type="text">
            <label for="">Password</label>
            <input type="text">
            <button>Login</button>
        </div>

    </div>
</template>

<style scoped>
div{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: rgb(217, 159, 255);
    margin: 30%;
    border-radius: 4px;
    color: whitesmoke;
    text-align: center;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2)
}
h1{
    margin: 0;
}
.input{
    box-shadow:none;
    margin: 0;
    background: violet;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
}
input{
    border-radius: 4px;
    border:none;
}
button{
    border-radius: 4px;
    border: none;
    margin-top: 8px;
    width: 100%;
}
</style>

