import{p as e}from"./index-CBT-DF28.js";const s={list:()=>e.get("/admin/site-content"),getByType:t=>e.get(`/admin/site-content/${t}`),upsert:(t,n)=>e.put(`/admin/site-content/${t}`,n)};export{s};
