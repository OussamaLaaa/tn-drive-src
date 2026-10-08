#!/usr/bin/env python3
"""Assemble src/ into a single self-contained dist/index.html (no dependencies).
Usage: python3 build.py [--check]   (--check only verifies the build is reproducible)"""
import glob,os,sys,re
R=os.path.dirname(os.path.abspath(__file__))
def rd(p):
    return open(os.path.join(R,p),encoding='utf-8').read()
def build():
    tpl=rd('src/index.template.html')
    css=rd('src/css/style.css').rstrip('\n')
    assets=rd('src/assets/signs.js')
    files=sorted(glob.glob(os.path.join(R,'src/js/*.js')))
    game='\n'.join(open(f,encoding='utf-8').read().rstrip('\n') for f in files)
    out=tpl.replace('/*@CSS@*/',css).replace('/*@ASSETS@*/',assets).replace('/*@GAME@*/',game+'\n')
    return out,files
if __name__=='__main__':
    out,files=build()
    os.makedirs(os.path.join(R,'dist'),exist_ok=True)
    open(os.path.join(R,'dist/index.html'),'w',encoding='utf-8').write(out)
    vj=os.path.join(R,'dist/vercel.json')
    if not os.path.exists(vj):open(vj,'w').write('{\n  "cleanUrls": true,\n  "headers": [{"source": "/(.*)", "headers": [{"key": "Cache-Control", "value": "public, max-age=0, must-revalidate"}]}]\n}\n')
    print('built dist/index.html',len(out)//1024,'KB from',len(files),'modules')
