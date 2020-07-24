import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "设置您的环境",
        "link": "getting_started/setup_your_environment.html"
    },
    'next': {
        "text": "命令行界面",
        "link": "getting_started/command_line_interface.html"
    },
    'sidebar': [
        {
            "text": "Deno 中文手册",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "text": "介绍",
            "link": "introduction.html",
            "pagePath": "introduction.md"
        },
        {
            "link": "getting_started.html",
            "children": [
                {
                    "text": "安装",
                    "link": "getting_started/installation.html",
                    "pagePath": "getting_started/installation.md"
                },
                {
                    "text": "设置您的环境",
                    "link": "getting_started/setup_your_environment.html",
                    "pagePath": "getting_started/setup_your_environment.md"
                },
                {
                    "text": "第一步",
                    "link": "getting_started/first_steps.html",
                    "pagePath": "getting_started/first_steps.md"
                },
                {
                    "text": "命令行界面",
                    "link": "getting_started/command_line_interface.html",
                    "pagePath": "getting_started/command_line_interface.md"
                },
                {
                    "text": "权限",
                    "link": "getting_started/permissions.html",
                    "pagePath": "getting_started/permissions.md"
                },
                {
                    "text": "使用 TypeScript",
                    "link": "getting_started/typescript.html",
                    "pagePath": "getting_started/typescript.md"
                },
                {
                    "text": "WebAssembly 支持",
                    "link": "getting_started/webassembly.html",
                    "pagePath": "getting_started/webassembly.md"
                }
            ],
            "text": "入门",
            "pagePath": "getting_started.md"
        },
        {
            "link": "runtime.html",
            "children": [
                {
                    "text": "稳定性",
                    "link": "runtime/stability.html",
                    "pagePath": "runtime/stability.md"
                },
                {
                    "text": "程序生命周期",
                    "link": "runtime/program_lifecycle.html",
                    "pagePath": "runtime/program_lifecycle.md"
                },
                {
                    "text": "编译器 API",
                    "link": "runtime/compiler_apis.html",
                    "pagePath": "runtime/compiler_apis.md"
                },
                {
                    "text": "Worker",
                    "link": "runtime/workers.html",
                    "pagePath": "runtime/workers.md"
                }
            ],
            "text": "运行时",
            "pagePath": "runtime.md"
        },
        {
            "link": "linking_to_external_code.html",
            "children": [
                {
                    "text": "重新加载特定的模块",
                    "link": "linking_to_external_code/reloading_modules.html",
                    "pagePath": "linking_to_external_code/reloading_modules.md"
                },
                {
                    "text": "完整性检查与锁定文件",
                    "link": "linking_to_external_code/integrity_checking.html",
                    "pagePath": "linking_to_external_code/integrity_checking.md"
                },
                {
                    "text": "代理（Proxies）",
                    "link": "linking_to_external_code/proxies.html",
                    "pagePath": "linking_to_external_code/proxies.md"
                },
                {
                    "text": "导入映射（Import maps）",
                    "link": "linking_to_external_code/import_maps.html",
                    "pagePath": "linking_to_external_code/import_maps.md"
                }
            ],
            "text": "与外部代码连接",
            "pagePath": "linking_to_external_code.md"
        },
        {
            "link": "standard_library.html",
            "text": "标准库",
            "pagePath": "standard_library.md"
        },
        {
            "link": "testing.html",
            "children": [
                {
                    "text": "断言",
                    "link": "testing/assertions.html",
                    "pagePath": "testing/assertions.md"
                }
            ],
            "text": "测试",
            "pagePath": "testing.md"
        },
        {
            "link": "tools.html",
            "children": [
                {
                    "text": "调试器 (debugger)",
                    "link": "tools/debugger.html",
                    "pagePath": "tools/debugger.md"
                },
                {
                    "text": "脚本安装器",
                    "link": "tools/script_installer.html",
                    "pagePath": "tools/script_installer.md"
                },
                {
                    "text": "代码格式化",
                    "link": "tools/formatter.html",
                    "pagePath": "tools/formatter.md"
                },
                {
                    "text": "打包",
                    "link": "tools/bundler.html",
                    "pagePath": "tools/bundler.md"
                },
                {
                    "text": "文档生成器",
                    "link": "tools/documentation_generator.html",
                    "pagePath": "tools/documentation_generator.md"
                },
                {
                    "text": "依赖检查器",
                    "link": "tools/dependency_inspector.html",
                    "pagePath": "tools/dependency_inspector.md"
                },
                {
                    "text": "Linter",
                    "link": "tools/linter.html",
                    "pagePath": "tools/linter.md"
                }
            ],
            "text": "内置工具",
            "pagePath": "tools.md"
        },
        {
            "link": "embedding_deno.html",
            "text": "嵌入式 Deno",
            "pagePath": "embedding_deno.md"
        },
        {
            "link": "contributing.html",
            "children": [
                {
                    "text": "从源码构建",
                    "link": "contributing/building_from_source.html",
                    "pagePath": "contributing/building_from_source.md"
                },
                {
                    "text": "测试和工具",
                    "link": "contributing/development_tools.html",
                    "pagePath": "contributing/development_tools.md"
                },
                {
                    "text": "Deno 风格指南",
                    "link": "contributing/style_guide.html",
                    "pagePath": "contributing/style_guide.md"
                },
                {
                    "text": "内部细节",
                    "link": "contributing/architecture.html",
                    "pagePath": "contributing/architecture.md"
                }
            ],
            "text": "贡献",
            "pagePath": "contributing.md"
        },
        {
            "link": "examples.html",
            "children": [
                {
                    "text": "Unix cat",
                    "link": "examples/unix_cat.html",
                    "pagePath": "examples/unix_cat.md"
                },
                {
                    "text": "文件服务器",
                    "link": "examples/file_server.html",
                    "pagePath": "examples/file_server.md"
                },
                {
                    "text": "TCP echo",
                    "link": "examples/tcp_echo.html",
                    "pagePath": "examples/tcp_echo.md"
                },
                {
                    "text": "运行子进程",
                    "link": "examples/subprocess.html",
                    "pagePath": "examples/subprocess.md"
                },
                {
                    "text": "检查与放弃权限",
                    "link": "examples/permissions.html",
                    "pagePath": "examples/permissions.md"
                },
                {
                    "text": "处理系统信号",
                    "link": "examples/os_signals.html",
                    "pagePath": "examples/os_signals.md"
                },
                {
                    "text": "文件系统事件",
                    "link": "examples/file_system_events.html",
                    "pagePath": "examples/file_system_events.md"
                },
                {
                    "text": "测试当前文件是否为主程序",
                    "link": "examples/testing_if_main.html",
                    "pagePath": "examples/testing_if_main.md"
                }
            ],
            "text": "示例",
            "pagePath": "examples.md"
        }
    ],
    config: { "root": "/", ...projectConfig },
    'pagePath': "getting_started/first_steps.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/first_steps.html",
    'title': "第一步",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>第一步</h1>\n<p>这个页面包含一些示例，您可以从中学到 Deno 的基本概念。</p>\n<p>我们假设您已经对 JavaScript 有过预先的了解，特别是 <code>async</code>/<code>await</code>。如果您没有了解过 JavaScript，您可能需要先阅读这个指南：<a href="https://developer.mozilla.org/zh-CN/docs/learn/JavaScript">JavaScript</a>.</p>\n<h2 id="hello-world">Hello World<a class="anchor" href="#hello-world">§</a></h2>\n<p>Deno 是一个 JavaScript 和 TypeScript 的运行时，并尝试与浏览器兼容并使用现代的功能 (features)。</p>\n<p>由于 Deno 具有浏览器兼容性，<code>Hello World</code> 程序与浏览器里的没有区别。</p>\n<pre class="language-ts"><code class="language-ts"><span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">"Welcome to Deno 🦕"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>尝试一下：</p>\n<pre class="language-shell"><code class="language-shell">deno run <a class="token url-link" href="https://deno.land/std/examples/welcome.ts">https://deno.land/std/examples/welcome.ts</a>\n</code></pre>\n<h2 id="%E5%8F%91%E5%87%BA%E4%B8%80%E4%B8%AA-http-%E8%AF%B7%E6%B1%82">发出一个 HTTP 请求<a class="anchor" href="#%E5%8F%91%E5%87%BA%E4%B8%80%E4%B8%AA-http-%E8%AF%B7%E6%B1%82">§</a></h2>\n<p>通过 HTTP 请求从服务器获取数据是一件很常见的事。让我们编写一个简单的程序来获取文件并打印到终端。</p>\n<p>就像浏览器一样，您可以使用 web 标准的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API"><code>fetch</code></a> API 来发出请求。</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token property-access">args</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token known-class-name class-name">Uint8Array</span></span><span class="token punctuation">(</span><span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token method function property-access">arrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">await</span> <span class="token maybe-class-name">Deno</span><span class="token punctuation">.</span><span class="token property-access">stdout</span><span class="token punctuation">.</span><span class="token method function property-access">write</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>让我们看看它做了什么：</p>\n<ol>\n<li>\n<p>我们取得了第一个命令行参数，存储到变量 <code>url</code>。</p>\n</li>\n<li>\n<p>我们向指定的地址发出请求，等待响应，然后存储到变量 <code>res</code>。</p>\n</li>\n<li>\n<p>我们把响应体解析为一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"><code>ArrayBuffer</code></a>，等待接收完毕，将其转换为 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"><code>Uint8Array</code></a>，最后存储到变量 <code>body</code>。</p>\n</li>\n<li>\n<p>我们把 <code>body</code> 的内容写入标准输出流 <code>stdout</code>。</p>\n</li>\n</ol>\n<p>尝试一下：</p>\n<pre class="language-shell"><code class="language-shell">deno run <a class="token url-link" href="https://deno.land/std/examples/curl.ts">https://deno.land/std/examples/curl.ts</a> <a class="token url-link" href="https://example.com">https://example.com</a>\n</code></pre>\n<p>这个程序将会返回一个关于网络权限的错误，我们做错了什么？您可能会想起来，Deno 默认用安全环境执行代码。这意味着您需要显式赋予程序权限，允许它进行一些特权操作，比如网络访问。</p>\n<p>用正确的权限选项再试一次：</p>\n<pre class="language-shell"><code class="language-shell">deno run --allow-net<span class="token operator">=</span>example.com <a class="token url-link" href="https://deno.land/std/examples/curl.ts">https://deno.land/std/examples/curl.ts</a> <a class="token url-link" href="https://example.com">https://example.com</a>\n</code></pre>\n<h2 id="%E8%AF%BB%E5%8F%96%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6">读取一个文件<a class="anchor" href="#%E8%AF%BB%E5%8F%96%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6">§</a></h2>\n<p>Deno 也提供内置的 API，它们都位于全局变量 <code>Deno</code> 中。您可以在此找到相关文档：<a href="https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts">doc.deno.land</a>。</p>\n<p>文件系统 API 没有 web 标准形式，所以 Deno 提供了内置的 API。</p>\n<p>示例：<a href="../examples/unix_cat.html">Unix cat</a></p>\n<p>{{#include ../examples/unix_cat.md:2:}}</p>\n<h2 id="tcp-%E6%9C%8D%E5%8A%A1">TCP 服务<a class="anchor" href="#tcp-%E6%9C%8D%E5%8A%A1">§</a></h2>\n<p>示例：<a href="../examples/tcp_echo.html">TCP echo</a></p>\n<p>{{#include ../examples/tcp_echo.md:2:}}</p>\n<h2 id="%E6%9B%B4%E5%A4%9A%E7%A4%BA%E4%BE%8B">更多示例<a class="anchor" href="#%E6%9B%B4%E5%A4%9A%E7%A4%BA%E4%BE%8B">§</a></h2>\n<p>您可以在 <a href="../examples.html">示例</a> 一章找到更多示例。</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#hello-world">Hello World</a></li><li><a href="#%E5%8F%91%E5%87%BA%E4%B8%80%E4%B8%AA-http-%E8%AF%B7%E6%B1%82">发出一个 HTTP 请求</a></li><li><a href="#%E8%AF%BB%E5%8F%96%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6">读取一个文件</a></li><li><a href="#tcp-%E6%9C%8D%E5%8A%A1">TCP 服务</a></li><li><a href="#%E6%9B%B4%E5%A4%9A%E7%A4%BA%E4%BE%8B">更多示例</a></li></ol></nav>'
        } })
};
