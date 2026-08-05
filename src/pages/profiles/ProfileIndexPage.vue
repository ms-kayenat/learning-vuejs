<script setup>
import { ref } from 'vue'
import ProfileImageSetting from '@/components/profile/ProfileImageSetting.vue';
import PersonalDetailSetting from '@/components/profile/PersonalDetailSetting.vue';
import PasswordSetting from '@/components/profile/PasswordSetting.vue';

const admin = ref({
  id: "1",
  first_name: 'Admin',
  last_name: 'User',
  phone: '9330000000',
  image_url: 'https://placehold.co/200x200',
})

const errors = ref({})
const isProcessing = ref(false)
const processing = ref(false)
const password = ref({
  current_password: '',
  new_password: '',
  confirm_password: ''
})

</script>

<template>
  <div class="dashy-style">
    <div class="page-header">
      <div class="page-header-text">
        <h1 class="page-title">Profile Settings</h1>
      </div>
    </div>

    <ProfileImageSetting :admin="admin" />
    
    <PersonalDetailSetting
      :admin="admin"
      :errors="errors"
      :processing="isProcessing"
    />

    <PasswordSetting
      :admin="admin"
      :password="password"
      :errors="errors"
      :processing="processing"
    />
  </div>
</template>

<style>
.dashy-style .profile-columns {
  display: flex;
  justify-content: flex-start;
  padding: 1rem 0;
}

.dashy-style .profile-column {
  width: 50%;
}

.dashy-style.dashy-section {
  margin-top: 2rem;
}

.dashy-style .trainings-style {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
  .dashy-style .earning-stats {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }   

  .dashy-style .profile-columns {
    flex-direction: column;
  }   

  .dashy-style .profile-column {
    width: 100%;
    margin-top: 1rem;
  }

  .dashy-style .trainings-style {
    display: block;
  }   
}
</style>
