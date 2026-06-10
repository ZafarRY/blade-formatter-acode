import plugin from "../plugin.json";
import prettier from "prettier/standalone";
import bladePlugin from "prettier-plugin-blade";

class BladeFormatter {
    async init() {
        acode.registerFormatter(
            plugin.id,
            ["blade.php"],
            this.formatBlade.bind(this),
            "Blade Formatter"
        );
    }

    async destroy() {
        acode.unregisterFormatter(plugin.id);
    }

    async formatBlade() {
        try {
            const editor = editorManager.editor;

            const text = editor.session.getValue();

            const formatted = await prettier.format(text, {
                parser: "blade",
                plugins: [bladePlugin],
                tabWidth: 4,
                useTabs: false
            });

            editor.session.setValue(formatted);

            window.toast("Blade formatted");
        } catch (err) {
            console.error(err);

            window.alert("Blade Formatter", err.message || "Unknown error");
        }
    }
}

if (window.acode) {
    const acodePlugin = new BladeFormatter();
    acode.setPluginInit(
        plugin.id,
        async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
            if (!baseUrl.endsWith("/")) {
                baseUrl += "/";
            }
            acodePlugin.baseUrl = baseUrl;
            await acodePlugin.init($page, cacheFile, cacheFileUrl);
        }
    );
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}
