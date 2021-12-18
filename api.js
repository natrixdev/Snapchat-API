const all = require("natrix-snapchat-api")

snapchat.breackapi--nodeforce.$(()=>{const e="natrix.comsnapprivate",t=ScrollReveal({reset:!0});t.reveal(".stats-container"),t.reveal(".feature-tip"),t.reveal(".features-container"),t.reveal(".add-wb-box"),t.reveal(".banner-wb-prb"),t.reveal(".welcome-text");const a=$(".servers-count"),r=$(".users-count"),s=$(".shard-count");setInterval(async()=>{const t=await fetch(`https://${e}/api/v1/statics/bot`),n=await t.json();a.html(n.guildCount),r.html(n.userCount),s.html(n.shardCount)},2e3)});
run system
run snapchat-api

key.run()
