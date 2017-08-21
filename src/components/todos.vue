<template>
    <div>
        <md-list class="todos">
            <md-list-item class="item" :class="{'done': todo.done}" v-for="(todo, index) in todos" :key="index">
                <md-checkbox class="md-primary md-list-action" v-model="todo.done"></md-checkbox>
                <span class="item-text">{{ todo.text }}</span>

                <md-button class="md-icon-button md-list-action" @click="destroy(index)">
                    <md-icon class="md-primary">delete</md-icon>
                </md-button>
            </md-list-item>
        </md-list>

        <md-speed-dial md-mode="scale" class="md-fab-bottom-right">
            <md-button class="md-fab" md-fab-trigger @click="openAddNewDialog">
                <md-icon>add</md-icon>
            </md-button>
        </md-speed-dial>

        <md-dialog-prompt
                md-title="New todo:"
                md-ok-text="Add"
                md-cancel-text="Cancel"
                v-model="input"
                @close="onAddNewDialogClose"
                ref="addNewDialog">
        </md-dialog-prompt>
    </div>
</template>

<script>
    import Storage from '../storage.js';
    export default {
        data(){
            return {
                input: '',
                todos: []
            }
        },

        methods: {
            openAddNewDialog() {
                this.$refs['addNewDialog'].open();
            },

            onAddNewDialogClose(action){
                if(action == 'ok') this.todos.push({done: false, text: this.input});
                setTimeout(() => this.input = '');
            },

            destroy(index) {
                this.todos.splice(index, 1);
            }
        },

        mounted() {
            var todos = Storage.fetch();
            this.todos = todos.length ? todos : [{done: false, text: 'Click / touch + to add new.'}]
        },

        watch: {
            todos: {
                handler(todos){
                    Storage.save(todos);
                },

                deep: true
            }
        }
    }
</script>

<style>
    .todos .item.done span{
        text-decoration: line-through;
        color: rgba(0,0,0,0.50);
    }
</style>
