<template>
    <div class="upcoming-card">
                        <div class="upcoming-card-col">
                            <div class="upcoming-card-title"><slot name="requesting"></slot> X <slot name="recipient"></slot></div>
                            <div class="upcoming-card-subtext">
                                <div class="upcoming-card-subtext-type">Type:<slot name="type"></slot></div>
                                <div class="upcoming-card-subtext-dur">Dur: <slot name="time_allocated"></slot>min</div>
                                <div class="upcoming-card-subtext-topic">Topic: <slot name="topic"></slot></div>
                            </div>
                        </div>
                        <div class="upcoming-card-col">
                            <div class="upcoming-card-date"><slot name="date"></slot> </div>
                            <div class="upcoming-card-loc">Room Number:<slot name="room_num"></slot></div>
                        </div>
                    </div>
</template>
<style>
@media only screen and (max-width:800px){
    .upcoming-card-title{
        font-size: 10px;
    }
}
</style>
