<template>
    <div id="operate">
        <h4>{{ $route.params.nickName }}</h4>
        <nav>
            <a v-for="(one, index) in navData" :key="index" @click="go(one)" class="nav-link" :class="{active: one.to.name === $route.name}">{{ one.title }}</a>
        </nav>
        <transition name="transparent" mode="out-in">
            <router-view class="container-fluid mass-content"></router-view>
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Operate',
    created() {
        this.$router.push({
            ...this.navData[0].to,
            ...this.routeData,
        });
    },
    data() {
        return {
            navData: [
                {
                    to: {
                        name: 'redPacket',
                    },
                    title: '群内拉新红包',
                },
            ],
        };
    },
    methods: {
        go(one) {
            this.$router.push({
                ...one.to,
                ...this.routeData,
            });
        },
    },
    watch: {
        $route() {
            this.$router.push({
                ...this.navData[0].to,
                ...this.routeData,
            });
        },
    },
    computed: {
        routeData() {
            return {
                id: this.$route.params.id,
                nickName: this.$route.params.nickName,
            };
        },
        ...mapState('Robot', {
            robotList: 'list',
        }),
    },
};
</script>

<style scoped>
#mass-texting {
}

h4 {
    margin-top: 0;
    padding-top: 1.4rem;
    margin-left: 2rem;
    font-weight: 400;
    color: rgb(133, 135, 135);
    flex-grow: 0;
}

nav {
    box-shadow: 0 2px 1px rgb(185, 185, 185);
    margin-top: 1rem;
    padding-left: 4rem;
    flex-grow: 0;

    & .nav-link {
        padding: .8rem 1.5rem;
        color: rgb(133, 135, 135);
        display: inline-block;
    }

    & .active {
        border-bottom: 2px solid rgb(185, 185, 185);
    }
}

.mass-content {
    padding-top: 2rem;
    flex-grow: 1;
    overflow-y: scroll;
    position: relative;
}
</style>
