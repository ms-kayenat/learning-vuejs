import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ToastNotificationPlugin from '@/dashy/plugins/ToastNotificationPlugin'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastNotificationPlugin)

function flattenValidationErrors(errors) {
  console.log(Object.keys(errors).length);
  if (Object.keys(errors).length === 0) return null;

  let result = {};
  for (const [key, value] of Object.entries(errors)) {
    if (Array.isArray(value)) {
      result[key] = value.shift();
    } else if (typeof value === 'object') {
      result[key] = flattenValidationErrors(value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

app.config.globalProperties.sortItems = (array, property) => {
  array.sort((a, b) => {
    return a[property].localeCompare(b[property]);
  });

  return array;
};

app.config.globalProperties.flattenValidationErrors = (errors) => {
  const result = flattenValidationErrors(errors);
  return result;
};

const truncateText = (text, limit = 64) => {
  if (!text) return '';
  return text.length > limit ? text.substring(0, limit) + '...' : text;
};

app.config.globalProperties.truncateText = truncateText;

app.config.globalProperties.readableFormattedDate = (dateString) => {
  // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let options = { year: 'numeric', month: 'short', day: 'numeric' };
  let d = new Date(dateString);

  let result = d.toLocaleDateString("en-US", options);

  return result;
};

app.config.globalProperties.readableFormattedLongDateWithoutMeridiem = (dateString) => {
  let d = new Date(dateString);

  // YYYY-MM-DD HH:mm:ss.sssZ
  let result = d.toISOString();
  result = result.substr(0, 19).replace(/T/, ' ');

  return result;
};

app.config.globalProperties.readableFormattedLongDateWithMeridiem = (dateString) => {
    let d = new Date(dateString);

    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    };

    // Using undefine for local time zone selection.
    let result = d.toLocaleString(undefined, options);

    return result;
};

// app.config.globalProperties.readableFormattedLongDateWithMeridiem = (dateString) => {
//   let d = new Date(dateString);

//   // Extract hours and minutes
//   let hours = d.getHours();
//   let minutes = d.getMinutes();

//   // Determine AM or PM
//   let ampm = hours >= 12 ? 'PM' : 'AM';

//   // Convert 24-hour format to 12-hour format
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'

//   // Format minutes to always have two digits
//   minutes = minutes < 10 ? '0' + minutes : minutes;

//   // Format the date as YYYY-MM-DD HH:mm AM/PM
//   let formattedDate = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${hours}:${minutes} ${ampm}`;

//   return formattedDate;
// };

app.config.globalProperties.copyToClipboard = (textToCopy) => {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard api method'
    return navigator.clipboard.writeText(textToCopy);
  } else {
    // text area method
    let textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    // make the textarea out of viewport
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return new Promise((res, rej) => {
      // here the magic happens
      document.execCommand('copy') ? res() : rej();
      textArea.remove();
    });
  }
};

app.mount('#app')